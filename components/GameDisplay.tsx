import React from 'react';
import { INBAGame} from '../types/Game';
import * as NBAIcons from 'react-nba-logos';
import { Button } from '@mui/material';

interface GameDisplayProps extends INBAGame {
    isInDropdown?: boolean;
  }

const GameDisplay: React.FC<GameDisplayProps> = (props) =>{
   const {id, homeTeam, homeTeamLogo, awayTeam, awayTeamLogo, schedule,  isInDropdown = false,} = props;
   const teamIconMap = {
        //TODO: Complete for All NBA Teams
        "TOR": NBAIcons.TOR,
        "BOS": NBAIcons.BOS,
        // Add more teams here following the same pattern
        "LAL": NBAIcons.LAL,
        "GSW": NBAIcons.GSW,
        
        // Continue for all NBA teams
    };
    const teamAbbMap = {
        //TODO: Complete for All NBA Teams
        "Toronto Raptors": "TOR",
        "Boston Celtics": "BOS",
        "Los Angeles Lakers": "LAL",
        "Golden State Warriors": "GSW",
        // Continue for all NBA teams
    };
    const getTeamIcon = (teamName: string) => {
        // Look up the component in the teamIconMap by teamName
        const IconComponent = teamIconMap[teamName];
    
        // If a matching component was found, render it; otherwise, return null or a default icon
        return IconComponent ? <IconComponent /> : null;
    };
    const formatTime = (gameDate : Date) =>{
        const scheduleFormatted = new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
          }).format(gameDate);
        return scheduleFormatted
    }
    const handleBoxScoreClick= ()=>{
        //TODO: Redirect to page that shows box score of game
    }
    const handleOddsClick= ()=>{
        //TODO: Redirect to page that shows Odds of game
    }
    const handlePredictClick= ()=>{
        //TODO: Either redirect/dropdown and show predictions of AI Model from API
    }
   return(
    <div style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between', marginTop: '20px', }}>
    
        <div style={{marginLeft: '30px', display: 'flex', flexDirection: 'row', alignItems: 'center', width:'60%',justifyContent: 'space-between'}}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div>{getTeamIcon(teamAbbMap[homeTeam])}</div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', marginLeft: '10px'}}>
                    <p style={{fontSize:'20px', fontWeight:'800', color: "black"}}>{teamAbbMap[homeTeam]}</p>

                    <p style={{fontSize:'14px', fontWeight:'400'}}>{homeTeam}</p>

                </div>
                
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <p style={{fontSize:'20px', fontWeight:'800', color: "black"}}>VS</p>
                <p style={{fontSize:'14px', fontWeight:'400'}}>{formatTime(schedule)}</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'end',  marginRight: '10px'}}>
                    <p style={{fontSize:'20px', fontWeight:'800', color: "black"}}>{teamAbbMap[awayTeam]}</p>

                    <p style={{fontSize:'14px', fontWeight:'400'}}>{awayTeam}</p>

                </div>
                <div>{getTeamIcon(teamAbbMap[awayTeam])}</div>
                
            </div>
        </div>
        {isInDropdown ? null : (
        <div style={{display:'flex', flexDirection:'row', alignItems: 'center', marginRight: '30px'}}>
            <Button
                variant="contained"
                onClick={handleBoxScoreClick}
                style={{
                    fontSize:'14px',
                    width: '120px',
                    backgroundColor: '#EEEEEE', // Set the background color
                    color: 'black', // Set the text color to gray
                    borderRadius: '10px', // Rounded corners
                    textTransform: 'none', // Avoid uppercase transformation
                    marginRight:'10px'
                }}
            >
                Box Score
            </Button>
            <Button
                variant="contained"
                onClick={handleOddsClick}
                style={{
                    fontSize:'14px',
                    width: '80px',
                    backgroundColor: '#EEEEEE', // Set the background color
                    color: 'black', // Set the text color to gray
                    borderRadius: '10px', // Rounded corners
                    textTransform: 'none', // Avoid uppercase transformation
                    marginRight:'10px'
                }}
            >
                Odds
            </Button>
            <Button
                variant="contained"
                onClick={handlePredictClick}
                style={{
                    fontSize:'14px',
                    width: '80px',
                    backgroundColor: '#068FFF', // Set the background color
                    color: '#EEEEEE', // Set the text color to gray
                    borderRadius: '10px', // Rounded corners
                    textTransform: 'none', // Avoid uppercase transformation
                    marginRight:'10px'
                }}
            >
                Predict
            </Button>
        </div>
        )}
    </div>
    )

}
export default GameDisplay;
