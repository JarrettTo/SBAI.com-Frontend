import { useState, useEffect } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import GameDisplay from '../components/GameDisplay'
import { INBAGame } from '../types/Game';
import { Odds } from '../types/Odds';
import axios from 'axios';
import dotenv from 'dotenv';
import { Predictions } from "../types/Predictions";
import styles from './index.module.css'
import { Tabs, Tab, Box } from '@mui/material';
import TabPanel from "@components/TabsPanel";
dotenv.config();


const HomePage = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedGame, setSelectedGame] = useState<INBAGame | null>(null);
    const [gameSchedules, setGameSchedules] = useState<INBAGame[][]>([[],[],[],[],[],[],[]]);
    const [gameOdds, setGameOdds] = useState<Odds[]>([]);
    const [tabOptions, setTabOptions] = useState([])
    
    const [gamePreds, setGamePreds] = useState<Predictions[]>([]);
    const fetchGameSchedules = async () => {
        try {
            const response = await axios.get('/api/nba_games',{
            params: {
                api_key: process.env.ODDS_API_KEY, /// Access API key from environment variables
                },
            });
            setGameSchedules(currentGameSchedules =>
                currentGameSchedules.map((item, index) => 
                  index === 2 ? response.data : item
                )
            );

            console.log(response.data);
        } catch (error) {
            console.error('Error fetching game schedules:', error);
        }
    };
    const fetchPastGames = async () => {
        try {
            const response = await axios.get('/api/past_games');

            console.log("PAST:", response.data);
        } catch (error) {
            console.error('Error fetching game schedules:', error);
            
        }
    }; 
    const fetchFutureGames = async () => {
        try {
            const response = await axios.get('/api/future_games');

            console.log("PRESENT:",response.data);
            setGameSchedules(currentGameSchedules => {
                let updatedSchedules = [...currentGameSchedules];
                response.data.forEach((dataArr, index) => {
                  // Calculate the target index (starting from 4 in this case)
                  const targetIndex = 3 + index;
                  updatedSchedules[targetIndex] = dataArr;
                });
              
                // Return the updated schedules array
                return updatedSchedules;
              });

        } catch (error) {
            console.error('Error fetching game schedules:', error);
        }
    };    
    const fetchGameOdds = async () => {
        try {
            const response = await axios.get('/api/odds',{
                params: {
                    apiKey: process.env.ODDS_API_KEY, // Include the API key as a query parameter
                    },
                });
            setGameOdds(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching game odds:', error);
        }
    };
    const fetchGamePredictions = async () => {
        try {
            const response = await axios.get('/api/predictions');
            setGamePreds(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching game odds:', error);
        }
    };
    useEffect(() => {
        // Fetch NBA game schedules when the component mounts
        fetchGameSchedules();
        fetchFutureGames();
        console.log("STATE CHECK", gameSchedules);
        fetchGameOdds();
        fetchGamePredictions();
    
        const dates = [];
        const today = new Date();
    
        // Generate dates from two days ago through the next four days, adjusted for Alabama time
        for (let i = -2; i <= 2; i++) {
            // Create a date object for 'America/Chicago' time zone
            const date = new Date().toLocaleString("en-US", { timeZone: 'America/Chicago' });
            const localDate = new Date(date); // Convert the string back to a Date object for manipulation
            localDate.setDate(localDate.getDate() + i);
    
            // Use "Today" for the current date, otherwise format as "March 3", etc.
            if (i === 0) {
                dates.push("Upcoming");
            } else {
                const month = localDate.toLocaleString('default', { month: 'long', timeZone: 'America/Chicago' });
                const day = localDate.getDate();
                dates.push(`${month} ${day}`);
            }
        }
    
        setTabOptions(dates);
    }, []);
    
    const open = Boolean(anchorEl);
    const [value, setValue] = useState(0);
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (event.currentTarget.classList.contains('select-game-button')) {
            // Handle the "Select an NBA Game" button action
            setAnchorEl(event.currentTarget);
            } else if (event.currentTarget.classList.contains('predict-button')) {
            // Handle the "Predict" button action
            // Add your logic for the "Predict" button action here
            console.log('Predict button clicked');
        }
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleGameSelect = (game: INBAGame) => {
        setSelectedGame(game);
        handleClose();
    };

    const formatTime = (gameDate: Date) => {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        }).format(gameDate);
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    const options = ['Tab 1', 'Tab 2', 'Tab 3'];
    return (
        
        <div style={{display : "flex", flexDirection : "column", alignItems:"center", height: "100vh", overflow: 'hidden'}} >
            <div className={styles.header_container} style={{display : "flex", flexDirection : "column",alignItems:"center",justifyContent:"center"}}>
                <p className={styles.header}>Sports Betting AI</p>
            </div>
            <div className={styles.tabs} style={{display : "flex", flexDirection : "column", width:'80%', marginBottom:'15px'}}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} variant="scrollable" aria-label="basic tabs example">
                        {tabOptions.map((option, index) => (
                        <Tab label={option} {...a11yProps(index)} key={index} />
                        ))}
                    </Tabs>
                </Box>
            </div>
            
            <div className={styles.game_display}>
                
                    
                {gameSchedules[value]?.map((game) => (
                    <GameDisplay 
                        key={game.id} 
                        id={game.id} 
                        homeTeam={game.homeTeam}
                      
                        awayTeam={game.awayTeam}
                     
                        schedule={game.schedule}
                        odds={gameOdds.find((odds) => odds.home_team === game.homeTeam && odds.away_team === game.awayTeam)}
                        predictions={gamePreds.find((preds) => preds.home_team === game.homeTeam)}
                    />
                ))}
                    
                
                
            </div>
        </div>
    )
  };
  
export default HomePage;
