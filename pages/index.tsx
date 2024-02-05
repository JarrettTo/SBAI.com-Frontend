import { useState, useEffect } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import GameDisplay from '../components/GameDisplay'
import { INBAGame } from '../types/Game';
const sample1 : INBAGame = {
    id: 1,
    homeTeam: "Los Angeles Lakers",
    homeTeamLogo: "lakers.jpeg",
    awayTeam: "Golden State Warriors",
    awayTeamLogo: "warriors.jpeg",
    schedule: new Date("February 8 2024")
}
const sample2 : INBAGame = {
    id: 2,
    homeTeam: "Toronto Raptors",
    homeTeamLogo: "lakers.jpeg",
    awayTeam: "Boston Celtics",
    awayTeamLogo: "warriors.jpeg",
    schedule: new Date("February 8 2024")
}
const sample3 : INBAGame = {
    id: 3,
    homeTeam: "Toronto Raptors",
    homeTeamLogo: "lakers.jpeg",
    awayTeam: "Boston Celtics",
    awayTeamLogo: "warriors.jpeg",
    schedule: new Date("February 8 2024")
}
const sample4 : INBAGame = {
    id: 4,
    homeTeam: "Toronto Raptors",
    homeTeamLogo: "lakers.jpeg",
    awayTeam: "Boston Celtics",
    awayTeamLogo: "warriors.jpeg",
    schedule: new Date("February 8 2024")
}
const HomePage = () => {
    const [NBAGames, setNBAGames] = useState<INBAGame[]>([sample1, sample2, sample3, sample4, sample4, sample4])
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedGame, setSelectedGame] = useState<INBAGame | null>(null);

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
                <div>
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
                        {NBAGames.map((game) => (
                            <MenuItem key={game.id} onClick={() => handleGameSelect(game)}>
                                <GameDisplay
                                    id={game.id}
                                    homeTeam={game.homeTeam}
                                    homeTeamLogo={game.homeTeamLogo}
                                    awayTeam={game.awayTeam}
                                    awayTeamLogo={game.awayTeamLogo}
                                    schedule={game.schedule}
                                    isInDropdown={true}
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
                </div>
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
                {NBAGames.map((game) => (
                    <GameDisplay 
                        key={game.id} 
                        id={game.id} 
                        homeTeam={game.homeTeam}
                        homeTeamLogo={game.homeTeamLogo}
                        awayTeam={game.awayTeam}
                        awayTeamLogo={game.awayTeamLogo}
                        schedule={game.schedule}
                    />
                ))}
            </div>
        </div>
    )
  };
  
export default HomePage;