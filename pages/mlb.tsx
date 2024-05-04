import { useState, useEffect } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import GameDisplay from '../components/MLBGameDisplay'
import { IMLBGame, INBAGame } from '../types/Game';
import { Odds } from '../types/Odds';
import axios from 'axios';
import dotenv from 'dotenv';
import { Predictions } from "../types/Predictions";
import styles from './index.module.css'
import { Tabs, Tab, Box, Autocomplete } from '@mui/material';
import TabPanel from "@components/TabsPanel";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import * as MLBIcons from 'react-mlb-logos';
dotenv.config();


const MLBPage = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedGame, setSelectedGame] = useState<IMLBGame | null>(null);
    const [gameSchedules, setGameSchedules] = useState<IMLBGame[][]>([[],[],[]]);
    const [gameOdds, setGameOdds] = useState<Odds[]>([]);
    const [tabOptions, setTabOptions] = useState([])
    const [searchInput, setSearchInput] = useState('');
    const [gamePreds, setGamePreds] = useState<Predictions[]>([]);

    const teamAbbMap = {
        "ari": "Arizona Diamondbacks",
        "atl": "Atlanta Braves",
        "bal": "Baltimore Orioles",
        "bos": "Boston Red Sox",
        "chc": "Chicago Cubs",
        "cws": "Chicago White Sox",
        "cin": "Cincinnati Reds",
        "cle": "Cleveland Guardians",
        "col": "Colorado Rockies",
        "det": "Detroit Tigers",
        "hou": "Houston Astros",
        "kan": "Kansas City Royals",
        "laa": "Los Angeles Angels",
        "lad": "Los Angeles Dodgers",
        "mia": "Miami Marlins",
        "mil": "Milwaukee Brewers",
        "min": "Minnesota Twins",
        "nym": "New York Mets",
        "nyy": "New York Yankees",
        "oak": "Oakland Athletics",
        "phi": "Philadelphia Phillies",
        "pit": "Pittsburgh Pirates",
        "sd": "San Diego Padres",
        "sf": "San Francisco Giants",
        "sea": "Seattle Mariners",
        "stl": "St. Louis Cardinals",
        "tb": "Tampa Bay Rays",
        "tex": "Texas Rangers",
        "tor": "Toronto Blue Jays",
        "was": "Washington Nationals"
    }
   
    const fetchTodayGame = async () => {
        try {
            const response = await axios.get('/api/mlb/schedule/today');

            console.log("PRESENT:",response.data);
            if(response.status == 200){
                setGameSchedules( prev=>{
                    const updatedSched = [...prev]
                    updatedSched[1]= response.data
                    return updatedSched
                })
            }

        } catch (error) {
            console.error('Error fetching today MLB schedules:', error);
        }
    };

    const fetchYesterdayGame = async () => {
        try {
            const response = await axios.get('/api/mlb/schedule/yesterday');

            console.log("PRESENT:",response.data);
            if(response.status == 200){
                setGameSchedules( prev=>{
                    const updatedSched = [...prev]
                    updatedSched[0]= response.data
                    return updatedSched
                })
            }

        } catch (error) {
            console.error('Error fetching today MLB schedules:', error);
        }
    };
    
    const fetchTomorrowGame = async () => {
        try {
            const response = await axios.get('/api/mlb/schedule/tomorrow');

            console.log("FUTURE:",response.data);
            if(response.status == 200){
                setGameSchedules( prev=>{
                    const updatedSched = [...prev]
                    updatedSched[2]= response.data
                    return updatedSched
                })
            }

        } catch (error) {
            console.error('Error fetching today MLB schedules:', error);
        }
    };    
    const fetchTodayGameOdds = async () => {
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
    const fetchYesterdayGamePredictions = async () => {
        try {
            const date = new Date().toLocaleString("en-US", { timeZone: 'America/Chicago' });
            const currentDate = new Date(date); // Convert the string back to a Date object for manipulation
            currentDate.setDate(currentDate.getDate() - 1);
            let formattedDate = currentDate.toISOString().slice(0, 10);
            console.log('Yesterday Prediction Date:',formattedDate);

            const response = await axios.get('/api/get_db',{
                params: {
                    date: formattedDate 
                    },
                });
            
            // Convert ml_conf and ou_conf values to percentages
            const gamePreds = response.data.map(prediction => ({
            ...prediction,
            ml_conf: (prediction.ml_conf * 100).toFixed(2) + '%', // Convert ml_conf to percentage with two decimal places
            ou_conf: (prediction.ou_conf * 100).toFixed(2) + '%', // Convert ou_conf to percentage with two decimal places
            }));

            setGamePreds(prevGamePreds => [...prevGamePreds, ...gamePreds]); // Append to previous state
            console.log('Yesterday Preds:',response.data);
        } catch (error) {
            console.error('Error fetching game predictions:', error);
        }
    };

    const fetchTodayGamePredictions = async () => {
        try {
            const date = new Date().toLocaleString("en-US", { timeZone: 'America/Chicago' });
            const currentDate = new Date(date); // Convert the string back to a Date object for manipulation
            let formattedDate = currentDate.toISOString().slice(0, 10);
            console.log('Today Prediction Date:',formattedDate);

            const response = await axios.get('/api/get_db',{
                params: {
                    date: formattedDate 
                    },
                });
            
            // Convert ml_conf and ou_conf values to percentages
            const gamePreds = response.data.map(prediction => ({
            ...prediction,
            ml_conf: (prediction.ml_conf * 100).toFixed(2) + '%', // Convert ml_conf to percentage with two decimal places
            ou_conf: (prediction.ou_conf * 100).toFixed(2) + '%', // Convert ou_conf to percentage with two decimal places
            }));

            setGamePreds(prevGamePreds => [...prevGamePreds, ...gamePreds]); // Append to previous state
            console.log('Today Preds:',response.data);
        } catch (error) {
            console.error('Error fetching game predictions:', error);
        }
    }

    const fetchTomorrowGamePredictions = async () => {
        try {
            const date = new Date().toLocaleString("en-US", { timeZone: 'America/Chicago' });
            const currentDate = new Date(date); // Convert the string back to a Date object for manipulation
            currentDate.setDate(currentDate.getDate() + 1);
            let formattedDate = currentDate.toISOString().slice(0, 10);
            console.log('Tomorrow Prediction Date:',formattedDate);

            const response = await axios.get('/api/get_db',{
                params: {
                    date: formattedDate 
                    },
                });
            
            // Convert ml_conf and ou_conf values to percentages
            const gamePreds = response.data.map(prediction => ({
            ...prediction,
            ml_conf: (prediction.ml_conf * 100).toFixed(2) + '%', // Convert ml_conf to percentage with two decimal places
            ou_conf: (prediction.ou_conf * 100).toFixed(2) + '%', // Convert ou_conf to percentage with two decimal places
            }));

            setGamePreds(prevGamePreds => [...prevGamePreds, ...gamePreds]); // Append to previous state
            console.log('Tomorrow Preds:',response.data);
        } catch (error) {
            console.error('Error fetching game predictions:', error);
        }
    }

    useEffect(() => {
        // Fetch NBA game schedules when the component mounts
       
        fetchTodayGame()
        fetchTomorrowGame()
        fetchYesterdayGame()
        const dates = [];
        const today = new Date();
    
// Generate dates from two days ago through the next four days, adjusted for Alabama time
    for (let i = -1; i <= 1; i++) {
        // Create a date object for 'America/Chicago' time zone
        const date = new Date().toLocaleString("en-US", { timeZone: 'America/Chicago' });
        const localDate = new Date(date); // Convert the string back to a Date object for manipulation
        localDate.setDate(localDate.getDate() + i);

        // Use "Yesterday", "Today", and "Tomorrow" for the respective dates
        if (i === -1) {
            dates.push("Yesterday");
        } else if (i === 0) {
            dates.push("Today");
        } else if (i === 1) {
            dates.push("Tomorrow");
        } else {
            // For other days, format as "March 3", etc.
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

    const handleSearch = (e) => {
        setSearchInput(e.target.value);
      };

    const options = ['Tab 1', 'Tab 2', 'Tab 3'];
    return (
        
        <div style={{display : "flex", flexDirection : "column", alignItems:"center", height: "100vh", overflow: 'hidden'}} >
            <div className={styles.header_container} style={{display : "flex", flexDirection : "column",alignItems:"center",justifyContent:"center"}}>
                <p className={styles.header}>Sports X AI</p>
            </div>
            <div style={{width: '80%', marginBottom: '20px'}}>
                <Paper component="form"sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', }}>
                <InputBase value={searchInput} onChange={handleSearch} sx={{ ml: 1, flex: 1 }} placeholder="Search for a Team" inputProps={{style: {fontFamily: 'Inter, sans-serif', fontSize: '14px', }, 'aria-label': 'search for a team' }}/>
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                </Paper>
            </div>
            <div className={styles.tabs} style={{display : "flex", flexDirection : "column", width:'80%', marginBottom:'15px'}}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                    
                    <Tabs value={value} onChange={handleChange} variant="scrollable" aria-label="basic tabs example">
                        {tabOptions.map((option, index) => (
                        <Tab label={option} {...a11yProps(index)} key={index} />
                        ))}
                    </Tabs>
                    
                    
                        
                </Box>
            </div>
            
            <div className={styles.game_display}>
                
                    
                {value==0 || value == 1 || value == 2 ? 
                
                gameSchedules[value]?.filter((game) =>
                game.homeTeam.toLowerCase().includes(searchInput.toLowerCase()) ||
                game.awayTeam.toLowerCase().includes(searchInput.toLowerCase()) ||
                game.homeTeam.toLowerCase().includes(teamAbbMap[searchInput.toLowerCase()]) ||
                game.awayTeam.toLowerCase().includes(teamAbbMap[searchInput.toLowerCase()])
                ).map((game) => (
                    
                    <GameDisplay 
                        key={game.id} 
                        id={game.id} 
                        tiebreaker={game.tiebreaker}
                        homeTeam={game.homeTeam}
                        doubleHeader={game.doubleHeader}
                        series={game.series}
                        seriesGameNumber={game.seriesGameNumber}
                        innings={game.innings}
                        awayTeam={game.awayTeam}
                        schedule={game.schedule}
                        odds={gameOdds.find((odds) => odds.home_team === game.homeTeam && odds.away_team === game.awayTeam)}
                        predictions={gamePreds.find((preds) => preds.home_team === game.homeTeam && preds.away_team === game.awayTeam)}
                    />
                )): null
                }
                    
                
                
            </div>
        </div>
    )
  };
  
export default MLBPage;
