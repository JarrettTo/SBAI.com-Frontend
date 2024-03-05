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
                  index === 3 ? response.data : item
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
                  const targetIndex = 4 + index;
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
        const prediction1 : Predictions = {"away_team":"Golden State Warriors","home_team":"Washington Wizards","id":"0","ml_conf":"73.4%","ml_pred":"Golden State Warriors","ou_conf":"61.9%","ou_pred":"OVER 243"}

        const prediction2 : Predictions = {"away_team":"Brooklyn Nets","home_team":"Orlando Magic","id":"1","ml_conf":"72.4%","ml_pred":"Orlando Magic","ou_conf":"56.7%","ou_pred":"UNDER 215"}
        const prediction3 : Predictions = {
            "away_team": "Brooklyn Nets",
            "home_team": "Memphis Grizzlies",
            "id": "2",
            "ml_conf": "57.2%",
            "ml_pred": "Brooklyn Nets",
            "ou_conf": "67.8%",
            "ou_pred": "UNDER 214.5"
        }
        const prediction4 : Predictions = {
            "away_team": "Miami Heat",
            "home_team": "Sacramento Kings",
            "id": "3",
            "ml_conf": "52.5%",
            "ml_pred": "Sacramento Kings",
            "ou_conf": "52.8%",
            "ou_pred": "OVER 226.5"
        }
        const prediction5 : Predictions = {
            "away_team": "Denver Nuggets",
            "home_team": "Golden State Warriors",
            "id": "4",
            "ml_conf": "57.0%",
            "ml_pred": "Golden State Warriors",
            "ou_conf": "55.2%",
            "ou_pred": "UNDER 232"
        }
        const prediction6 : Predictions = {
            "away_team": "Chicago Bulls",
            "home_team": "New Orleans Pelicans",
            "id": "5",
            "ml_conf": "67.7%",
            "ml_pred": "New Orleans Pelicans",
            "ou_conf": "56.3%",
            "ou_pred": "UNDER 222.5"
        }
        const prediction7 : Predictions = {
            "away_team": "Orlando Magic",
            "home_team": "Atlanta Hawks",
            "id": "6",
            "ml_conf": "52.2%",
            "ml_pred": "Orlando Magic",
            "ou_conf": "59.0%",
            "ou_pred": "UNDER 226.5"
        }
        const prediction8 : Predictions = {
            "away_team": "Oklahoma City Thunder",
            "home_team": "Houston Rockets",
            "id": "7",
            "ml_conf": "62.6%",
            "ml_pred": "Oklahoma City Thunder",
            "ou_conf": "63.9%",
            "ou_pred": "UNDER 235.5"
        }
        const prediction9 : Predictions = {
            "away_team": "San Antonio Spurs",
            "home_team": "Utah Jazz",
            "id": "8",
            "ml_conf": "70.0%",
            "ml_pred": "Utah Jazz",
            "ou_conf": "51.6%",
            "ou_pred": "OVER 242"
        }
        const prediction10 : Predictions = {
            "away_team": "Charlotte Hornets",
            "home_team": "Portland Trail Blazers",
            "id": "9",
            "ml_conf": "54.0%",
            "ml_pred": "Charlotte Hornets",
            "ou_conf": "62.3%",
            "ou_pred": "UNDER 219.5"
        }
        const prediction11 : Predictions = {
            "away_team": "Sacramento Kings",
            "home_team": "Los Angeles Clippers",
            "id": "10",
            "ml_conf": "68.7%",
            "ml_pred": "Los Angeles Clippers",
            "ou_conf": "51.7%",
            "ou_pred": "UNDER 239"
        }
        setGamePreds([{"away_team":"Orlando Magic","home_team":"Charlotte Hornets","id":"0","ml_conf":"74.6%","ml_pred":"Orlando Magic","ou_conf":"53.4%","ou_pred":"OVER 207.5"},{"away_team":"Atlanta Hawks","home_team":"New York Knicks","id":"1","ml_conf":"66.5%","ml_pred":"New York Knicks","ou_conf":"65.5%","ou_pred":"OVER 216.5"},{"away_team":"Boston Celtics","home_team":"Cleveland Cavaliers","id":"2","ml_conf":"53.7%","ml_pred":"Cleveland Cavaliers","ou_conf":"55.8%","ou_pred":"UNDER 219"},{"away_team":"Philadelphia 76ers","home_team":"Brooklyn Nets","id":"3","ml_conf":"58.9%","ml_pred":"Philadelphia 76ers","ou_conf":"65.6%","ou_pred":"OVER 217.5"},{"away_team":"Detroit Pistons","home_team":"Miami Heat","id":"4","ml_conf":"79.4%","ml_pred":"Miami Heat","ou_conf":"54.0%","ou_pred":"UNDER 218"},{"away_team":"New Orleans Pelicans","home_team":"Toronto Raptors","id":"5","ml_conf":"69.0%","ml_pred":"New Orleans Pelicans","ou_conf":"50.7%","ou_pred":"UNDER 228.5"},{"away_team":"San Antonio Spurs","home_team":"Houston Rockets","id":"6","ml_conf":"74.2%","ml_pred":"Houston Rockets","ou_conf":"50.0%","ou_pred":"OVER 229"},{"away_team":"Indiana Pacers","home_team":"Dallas Mavericks","id":"7","ml_conf":"55.0%","ml_pred":"Dallas Mavericks","ou_conf":"54.3%","ou_pred":"UNDER 246"},{"away_team":"Phoenix Suns","home_team":"Denver Nuggets","id":"8","ml_conf":"59.4%","ml_pred":"Denver Nuggets","ou_conf":"60.2%","ou_pred":"UNDER 224"}])
    };
    useEffect(() => {
        // Fetch NBA game schedules when the component mount
        fetchGameSchedules();
        fetchFutureGames();
        console.log("STATE CHECK", gameSchedules)
        fetchGameOdds();
        fetchGamePredictions();
        const dates = [];
        const today = new Date();

        // Generate dates from two days ago through the next four days
        for (let i = -2; i <= 4; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);

        // Use "Today" for the current date, otherwise format as "March 3", etc.
        if (i === 0) {
            dates.push("Today");
        } else {
            const month = date.toLocaleString('default', { month: 'long' });
            const day = date.getDate();
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
