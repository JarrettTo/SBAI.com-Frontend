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
import { Tabs, Tab, Box, Autocomplete } from '@mui/material';
import TabPanel from "@components/TabsPanel";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import NavBar from "@components/Navbar";
dotenv.config();


const HomePage = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedGame, setSelectedGame] = useState<INBAGame | null>(null);
    const [gameSchedules, setGameSchedules] = useState<INBAGame[][]>([[],[],[],[],[],[],[]]);
    const [gameOdds, setGameOdds] = useState<Odds[]>([]);
    const [tabOptions, setTabOptions] = useState([])
    const [searchInput, setSearchInput] = useState('');
    const [gamePreds, setGamePreds] = useState<Predictions[]>([]);

    const teamAbbMap = {
        "atl": "atlanta hawks",
        "bos": "boston celtics",
        "bkn": "brooklyn nets",
        "cha": "charlotte hornets",
        "chi": "chicago bulls",
        "cle": "cleveland cavaliers",
        "dal": "dallas mavericks",
        "den": "denver nuggets",
        "det": "detroit pistons",
        "gsw": "golden state warriors",
        "hou": "houston rockets",
        "ind": "indiana pacers",
        "lac": "la clippers",
        "lal": "los angeles lakers",
        "mem": "memphis grizzlies",
        "mia": "miami heat",
        "mil": "milwaukee bucks",
        "min": "minnesota timberwolves",
        "nop": "new orleans pelicans",
        "nyk": "new york knicks",
        "okc": "oklahoma city thunder",
        "orl": "orlando magic",
        "phi": "philadelphia 76ers",
        "phx": "phoenix suns",
        "por": "portland trail blazers",
        "sac": "sacramento kings",
        "sas": "san antonio spurs",
        "tor": "toronto raptors",
        "uta": "utah jazz",
        "was": "washington wizards"
    }
    
    const fetchTodayGame = async () => {
        try {
            const response = await axios.get('/api/today_games');

            console.log("PRESENT:",response.data);
            setGameSchedules(currentGameSchedules => {
                let updatedSchedules = [...currentGameSchedules];
                response.data.forEach((dataArr, index) => {
                  // Calculate the target index (starting from 4 in this case)
                  const targetIndex = 1 + index;
                  updatedSchedules[targetIndex] = dataArr;
                });
              
                // Return the updated schedules array
                return updatedSchedules;
              });

        } catch (error) {
            console.error('Error fetching yesterday schedules:', error);
        }
    };

    const fetchYesterdayGame = async () => {
        try {
            const response = await axios.get('/api/past_games');

            console.log("Yesterday:",response.data);
            setGameSchedules(currentGameSchedules => {
                let updatedSchedules = [...currentGameSchedules];
                response.data.forEach((dataArr, index) => {
                  // Calculate the target index (starting from 4 in this case)
                  const targetIndex = index;
                  updatedSchedules[targetIndex] = dataArr;
                });
              
                // Return the updated schedules array
                return updatedSchedules;
              });

        } catch (error) {
            console.error('Error fetching yesterday schedules:', error);
        }
    };
    

    // const fetchGameSchedules = async () => {
    //     try {
    //         const response = await axios.get('/api/nba_games',{
    //         params: {
    //             api_key: process.env.ODDS_API_KEY, /// Access API key from environment variables
    //             },
    //         });
    //         console.log("CHECK: ", response.data)
    //         const filteredGames = response.data.filter((value) => {
    //             // Parse the schedule time to a Date object
    //             const gameDateUTC = new Date(value.schedule);
            
    //             // Create a Date object for the current time in UTC
    //             const currentDateUTC = new Date();
            
    //             // Function to convert a date to Central Time and strip the time part
    //             function toCSTDateString(date) {
    //                 // Convert to Central Time
    //                 const cstDate = new Date(date.toLocaleString("en-US", { timeZone: 'America/Chicago' }));
                    
    //                 // Extract the year, month, and day part
    //                 const year = cstDate.getFullYear();
    //                 const month = cstDate.getMonth(); // Note: getMonth() returns 0-11
    //                 const day = cstDate.getDate();
            
    //                 // Return the date in string form
    //                 return `${year}-${month}-${day}`;
    //             }
            
    //             // Convert both gameDate and currentDate to Central Time without the time part
    //             const gameDateString = toCSTDateString(gameDateUTC);
    //             const currentDateString = toCSTDateString(currentDateUTC);
            
    //             console.log("game date:", gameDateString);
    //             console.log("current date:", currentDateString);
            
    //             // Compare only the date parts (year, month, day)
    //             return gameDateString === currentDateString;
    //         });
            
    //         console.log(filteredGames);
            
              
    //         setGameSchedules(currentGameSchedules =>
    //             currentGameSchedules.map((item, index) => 
    //               index === 2 ? filteredGames : item
    //             )
    //         );
            
    //         console.log(filteredGames);
    //     } catch (error) {
    //         console.error('Error fetching game schedules:', error);
    //     }
    // };
    
    
    // const fetchPastGames = async () => {
    //     try {
    //         const alabamaTime = new Intl.DateTimeFormat('en-US', {
    //             timeZone: 'America/Chicago',
    //             year: 'numeric',
    //             month: '2-digit',
    //             day: '2-digit',
    //           }).format(new Date());
          
    //         const [month, day, year] = alabamaTime.split('/');
    //         const alabamaDate = new Date(`${year}-${month}-${day}T00:00:00-06:00`);
        
    //         alabamaDate.setDate(alabamaDate.getDate() - 1);
        
    //         let previousDate = alabamaDate.toISOString().split('T')[0];
            
    //         const response = await axios.get(`/api/get_db?date=${encodeURIComponent(previousDate)}`);
    //         console.log("PAST DATE:", previousDate)
    //         console.log("PAST:", response.data);

    //         setGameSchedules(currentGameSchedules =>
    //             currentGameSchedules.map((item, index) => 
    //               index === 1 ? response.data : item
    //             )
    //         );

    //         alabamaDate.setDate(alabamaDate.getDate() - 1);
    //         previousDate = alabamaDate.toISOString().split('T')[0];
    //         const response2 = await axios.get(`/api/get_db?date=${encodeURIComponent(previousDate)}`);

    //         console.log("PAST2:", response2.data);

    //         setGameSchedules(currentGameSchedules =>
    //             currentGameSchedules.map((item, index) => 
    //               index === 0 ? response2.data : item
    //             )
    //         );
    //     } catch (error) {
    //         console.error('Error fetching game schedules:', error);
            
    //     }
    // }; 
    const fetchFutureGames = async () => {
        try {
            const response = await axios.get('/api/future_games');

            console.log("Tomorrow:",response.data);
            setGameSchedules(currentGameSchedules => {
                let updatedSchedules = [...currentGameSchedules];
                response.data.forEach((dataArr, index) => {
                  // Calculate the target index (starting from 4 in this case)
                  const targetIndex = 2 + index;
                  updatedSchedules[targetIndex] = dataArr;
                });
              
                // Return the updated schedules array
                return updatedSchedules;
              });

        } catch (error) {
            console.error('Error fetching game schedules:', error);
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
        fetchFutureGames();
        console.log("STATE CHECK", gameSchedules);
        fetchTodayGameOdds();
        fetchYesterdayGamePredictions();
        fetchTodayGame();
        fetchYesterdayGame();
        fetchTodayGamePredictions();
    
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

    const handleSearch = (e) => {
        setSearchInput(e.target.value);
      };

    const options = ['Tab 1', 'Tab 2', 'Tab 3'];
    return (
        <>
        
        <div style={{display : "flex", flexDirection : "column", alignItems:"center", height: "100vh", overflow: 'hidden'}} >
            <NavBar/>
            <div className="flex flex-row justify-center items-center" style={{width: '80%', marginBottom: '20px'}}>
                <Paper component="form"sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', maxHeight:'50px' }}>
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
                        homeTeam={game.homeTeam}
                      
                        awayTeam={game.awayTeam}
                        schedule={game.schedule}
                        odds={gameOdds.find((odds) => odds.home_team === game.homeTeam && odds.away_team === game.awayTeam)}
                        predictions={gamePreds.find((preds) => preds.home_team === game.homeTeam && preds.away_team === game.awayTeam)}
                    />
                )): null
                // gameSchedules[value]?.map((game) => (
                    
                //     <GameDisplay 
                //         key={game.id} 
                //         id={game.id} 
                //         homeTeam={game.homeTeam}
                      
                //         awayTeam={game.awayTeam}
                     
                //         schedule={game.schedule}
                //         odds={gameOdds.find((odds) => odds.home_team === game.homeTeam && odds.away_team === game.awayTeam)}
                //         predictions={gamePreds.find((preds) => preds.home_team === game.homeTeam && preds.away_team === game.awayTeam)}
                //     />
                // ))
                }
                    
                
                
            </div>
        </div>
        </>
    )
  };
  
export default HomePage;
