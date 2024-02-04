import { useState, useEffect } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
type INBAGames = {
    homeTeam : string,
    homeTeamLogo : string,
    awayTeam : string,
    awayTeamLogo : string,
    schedule: Date,
    
}
const sample1 : INBAGames = {
    homeTeam: "Lakers",
    homeTeamLogo: "lakers.jpeg",
    awayTeam: "Warriors",
    awayTeamLogo: "warriors.jpeg",
    schedule: new Date("February 8 2024")
}
const sample2 : INBAGames = {
    homeTeam: "Bucks",
    homeTeamLogo: "lakers.jpeg",
    awayTeam: "Sixers",
    awayTeamLogo: "warriors.jpeg",
    schedule: new Date("February 8 2024")
}
const sample3 : INBAGames = {
    homeTeam: "Heat",
    homeTeamLogo: "lakers.jpeg",
    awayTeam: "Nuggets",
    awayTeamLogo: "warriors.jpeg",
    schedule: new Date("February 8 2024")
}
const sample4 : INBAGames = {
    homeTeam: "Pacers",
    homeTeamLogo: "lakers.jpeg",
    awayTeam: "Thunder",
    awayTeamLogo: "warriors.jpeg",
    schedule: new Date("February 8 2024")
}
const HomePage = () => {
    const [NBAGames, setNBAGames] = useState<INBAGames[]>([sample1, sample2, sample3, sample4])
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    
    return (
        <div style={{display : "flex", flexDirection : "column", alignItems:"center", height: "100vh", overflow: 'hidden'}} >
            <div style={{display : "flex", flexDirection : "column",alignItems:"center",justifyContent:"center", marginTop: '105px'}}>
                <h1 style={{fontWeight: 700, fontSize:'80px'}}>Sports Betting AI</h1>
                <div>
                    <Button
                        variant="contained"
                        endIcon={<ArrowDropDownIcon />}
                        onClick={handleClick}
                        style={{
                            fontSize:'20px',
                            width: '40vw',
                            backgroundColor: '#fff', // Set the background color
                            color: '#aaa', // Set the text color to gray
                            borderRadius: '10px', // Rounded corners
                            textTransform: 'none', // Avoid uppercase transformation
                            marginRight:'30px'
                        }}
                    >
                        Select an NBA Game
                    </Button>
                
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                        style={{ borderRadius: '20px' }} // Apply rounded corners to the Menu as well
                    >
                        <MenuItem onClick={handleClose}>Option 1</MenuItem>
                        <MenuItem onClick={handleClose}>Option 2</MenuItem>
                        <MenuItem onClick={handleClose}>Option 3</MenuItem>
                    </Menu>
                    <Button
                        variant="contained"
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
                    width: '90%',
          
                    height: '40vh',
                    backgroundColor: '#fff', // Set the background color
                    color: '#aaa', // Set the text color to gray
                    borderRadius: '10px', // Rounded corners
                    textTransform: 'none', // Avoid uppercase transformation
                    
                }}
             >

            </div>
        </div>
    )
  };
  
export default HomePage;