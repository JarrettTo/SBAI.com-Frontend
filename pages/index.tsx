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

dotenv.config();


const HomePage = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedGame, setSelectedGame] = useState<INBAGame | null>(null);
    const [gameSchedules, setGameSchedules] = useState<INBAGame[]>([]);
    const [gameOdds, setGameOdds] = useState<Odds[]>([]);
    const [gamePreds, setGamePreds] = useState<Predictions[]>([]);
    const fetchGameSchedules = async () => {
        try {
            const response = await axios.get('/api/nba_games',{
            params: {
                api_key: process.env.ODDS_API_KEY, /// Access API key from environment variables
                },
            });
            setGameSchedules(response.data);
            console.log(response.data);
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
        const prediction1 : Predictions = {
            id: "1",
            home_team: 'Atlanta Hawks',
            away_team: 'Toronto Raptors',
            ml_pred: 'Atlanta Hawks',
            ml_conf: '63.8%',
            ou_pred: 'OVER 243.5',
            ou_conf: '50.8%'
        }

        const prediction2 : Predictions = {
            id: "1",
            home_team: 'Philadeplhia 76ers',
            away_team: 'Cleveland Cavaliers',
            ml_pred: 'Cleveland Cavaliers',
            ml_conf: '50.7%',
            ou_pred: 'UNDER 228',
            ou_conf: '50.5%'
        }
        const prediction3 : Predictions = {
            id: "1",
            home_team: 'Houston Rockets',
            away_team: 'Phoenix Suns',
            ml_pred: 'Phoenix Suns',
            ml_conf: '55.9%',
            ou_pred: 'UNDER 229.5',
            ou_conf: '50.8%'
        }
        const prediction4 : Predictions = {
            id: "1",
            home_team: 'New Orleans Pelicans',
            away_team: 'Miami Heat',
            ml_pred: 'New Orleans Pelicans',
            ml_conf: '67.2%',
            ou_pred: 'UNDER 223',
            ou_conf: '52.6%'
        }
        const prediction5 : Predictions = {
            id: "1",
            home_team: 'Memphis Grizzlies',
            away_team: 'LA Clippers',
            ml_pred: 'LA Clippers',
            ml_conf: '73.0%',
            ou_pred: 'UNDER 223',
            ou_conf: '52.3%'
        }
        const prediction6 : Predictions = {
            id: "1",
            home_team: 'Oklahoma City Thunder',
            away_team: 'Washington Wizards',
            ml_pred: 'Boston Celtics',
            ml_conf: '89.8%',
            ou_pred: 'UNDER 241.5',
            ou_conf: '51.4%'
        }
        const prediction7 : Predictions = {
            id: "1",
            home_team: 'Portland Trail Blazers',
            away_team: 'Denver Nuggets',
            ml_pred: 'Denver Nuggets',
            ml_conf: '70.2%',
            ou_pred: 'OVER 217',
            ou_conf: '51.3%'
        }
        const prediction8 : Predictions = {
            id: "1",
            home_team: 'Golden State Warriors',
            away_team: 'Charlotte Hornets',
            ml_pred: 'Golden State Warriors',
            ml_conf: '78.2%',
            ou_pred: 'OVER 229.5',
            ou_conf: '50.3%'
        }
        const prediction9 : Predictions = {
            id: "1",
            home_team: 'Minnesota Timberwolves',
            away_team: 'Milkwaukee Bucks',
            ml_pred: 'Minnesota Timberwolves',
            ml_conf: '64.4%',
            ou_pred: 'UNDER 225.5',
            ou_conf: '51.1%'
        }
        const prediction10 : Predictions = {
            id: "1",
            home_team: 'Los Angeles Lakers',
            away_team: 'San Antonio Spurs',
            ml_pred: 'Los Angeles Lakers',
            ml_conf: '74.8%',
            ou_pred: 'OVER 237.5',
            ou_conf: '49.7%'
        }
        const prediction11 : Predictions = {
            id: "1",
            home_team: 'Sacramento Kings',
            away_team: 'San Antonio Spurs',
            ml_pred: 'Sacramento Kings',
            ml_conf: '51.3%',
            ou_pred: 'OVER 220',
            ou_conf: '55%'
        }
        setGamePreds([prediction1,prediction2,prediction3,prediction4,prediction5,prediction6,prediction7,prediction8, prediction9,prediction10])
    };
    useEffect(() => {
        // Fetch NBA game schedules when the component mounts
        fetchGameSchedules();
        fetchGameOdds();
        fetchGamePredictions();
    }, []);
    const open = Boolean(anchorEl);


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
      
    
    return (
        
        <div style={{display : "flex", flexDirection : "column", alignItems:"center", height: "100vh", overflow: 'hidden'}} >
            <div style={{display : "flex", flexDirection : "column",alignItems:"center",justifyContent:"center", marginTop: '105px'}}>
                <h1 style={{fontWeight: 700, fontSize:'80px'}}>Sports Betting AI</h1>
                <p style={{fontWeight: 500, fontSize:'15px', width: '30vw', textAlign:'center', marginBottom: '30px'}}>Select an upcoming NBA game and click the predict button to generate a prediciton using our latest AI Model!</p>
                {/*<div>
                    <Button
                        variant="contained"
                        className="select-game-button"
                        endIcon={<ArrowDropDownIcon />}
                        onClick={handleClick}
                        style={{
                            fontSize:'20px',
                            width: '50vw',
                            backgroundColor: '#fff', // Set the background color
                            color: '#aaa', // Set the text color to gray
                            borderRadius: '10px', // Rounded corners
                            textTransform: 'none', // Avoid uppercase transformation
                            marginRight:'30px',
                            whiteSpace: 'pre-line',
                        }}
                    >
                        {selectedGame
                            ? `${selectedGame.homeTeam} vs ${selectedGame.awayTeam} \n${formatTime(selectedGame.schedule)}`
                            : 'Select an NBA Game'}
                    </Button>
                
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                        PaperProps={{
                            style: {
                                borderRadius: '10px', // Rounded corners
                                width: '50vw',
                                
                            },
                        }}
                    >
                        {gameSchedules.map((game) => (
                            <MenuItem key={game.id} onClick={() => handleGameSelect(game)} style={{justifyContent:'center'}}>
                                <GameDisplay
                                    id={game.id}
                                    homeTeam={game.homeTeam}
                                    homeTeamLogo={game.homeTeamLogo}
                                    awayTeam={game.awayTeam}
                                    awayTeamLogo={game.awayTeamLogo}
                                    schedule={game.schedule}
                                    isInDropdown={true}
                                    odds={gameOdds.find((odds) => odds.home_team === game.homeTeam)}
                                    predictions={gamePreds.find((odds) => odds.home_team === game.homeTeam)}
                                />
                            </MenuItem>
                        ))}
                    </Menu>
                    <Button
                        variant="contained"
                        className="predict-button"
                        onClick={handleClick}
                        style={{
                            fontSize:'20px',
                            width: '10vw',
                            backgroundColor: '#068FFF', // Set the background color
                            color: '#EEEEEE', // Set the text color to gray
                            borderRadius: '10px', // Rounded corners
                            textTransform: 'none', // Avoid uppercase transformation
                        }}
                    >
                        Predict
                    </Button>
                    </div>*/}
            </div>
            <div
                style={{
                    marginTop: '60px',
                    width: '80%',
          
                    minHeight: '30vw',
                    backgroundColor: '#fff', // Set the background color
                    color: '#aaa', // Set the text color to gray
                    borderRadius: '10px', // Rounded corners
                    textTransform: 'none', // Avoid uppercase transformation
                    overflow: 'auto',
                    
                }}
             >
                {gameSchedules.map((game) => (
                    <GameDisplay 
                        key={game.id} 
                        id={game.id} 
                        homeTeam={game.homeTeam}
                        homeTeamLogo={game.homeTeamLogo}
                        awayTeam={game.awayTeam}
                        awayTeamLogo={game.awayTeamLogo}
                        schedule={game.schedule}
                        odds={gameOdds.find((odds) => odds.home_team === game.homeTeam && odds.away_team === game.awayTeam)}
                        predictions={gamePreds.find((odds) => odds.home_team === game.homeTeam)}
                    />
                ))}
            </div>
        </div>
    )
  };
  
export default HomePage;