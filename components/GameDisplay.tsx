import React from 'react';
import { INBAGame} from '../types/Game';
import * as NBAIcons from 'react-nba-logos';
const GameDisplay: React.FC<INBAGame> = (props) =>{
   const {id, homeTeam, homeTeamLogo, awayTeam, awayTeamLogo, schedule} = props;
   const teamIconMap = {
        "Toronto Raptors": NBAIcons.TOR,
        "TOR": NBAIcons.TOR,
        "Boston Celtics": NBAIcons.BOS,
        "BOS": NBAIcons.BOS,
        // Add more teams here following the same pattern
        "Los Angeles Lakers": NBAIcons.LAL,
        "LAL": NBAIcons.LAL,
        "Golden State Warriors": NBAIcons.GSW,
        "GSW": NBAIcons.GSW,
        // Continue for all NBA teams
    };
    const teamAbbMap = {
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
   return(
    <div style={{marginLeft: '30px', display: 'flex', flexDirection: 'row', alignItems: 'center', width:'60%',justifyContent: 'space-between'}}>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <div>{getTeamIcon(homeTeam)}</div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                <p style={{fontSize:'20px', fontWeight:'800', color: "black"}}>{teamAbbMap[homeTeam]}</p>

                <p style={{fontSize:'14px', fontWeight:'400'}}>{homeTeam}</p>

            </div>
            
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <p>VS</p>
            <p>{formatTime(schedule)}</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'end'}}>
                <p style={{fontSize:'20px', fontWeight:'800', color: "black"}}>{teamAbbMap[awayTeam]}</p>

                <p style={{fontSize:'14px', fontWeight:'400'}}>{awayTeam}</p>

            </div>
            <div>{getTeamIcon(awayTeam)}</div>
            
        </div>
    </div>
   )

}
export default GameDisplay;