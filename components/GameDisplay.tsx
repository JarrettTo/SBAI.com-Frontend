import React, { useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import { INBAGame} from '../types/Game';
import * as NBAIcons from 'react-nba-logos';
import { Button } from '@mui/material';

interface GameDisplayProps extends INBAGame {
    isInDropdown?: boolean;
    }

const GameDisplay: React.FC<GameDisplayProps> = (props) =>{
   const {id, homeTeam, homeTeamLogo, awayTeam, awayTeamLogo, schedule,  isInDropdown = false,} = props;
   const teamIconMap = {
            "TOR": NBAIcons.TOR,
            "BOS": NBAIcons.BOS,
            "LAL": NBAIcons.LAL,
            "GSW": NBAIcons.GSW,
            "ATL": NBAIcons.ATL,
            "BKN": NBAIcons.BKN,
            "CHA": NBAIcons.CHA,
            "CHI": NBAIcons.CHI,
            "CLE": NBAIcons.CLE,
            "DAL": NBAIcons.DAL,
            "DEN": NBAIcons.DEN,
            "DET": NBAIcons.DET,
            "HOU": NBAIcons.HOU,
            "IND": NBAIcons.IND,
            "LAC": NBAIcons.LAC,
            "MEM": NBAIcons.MEM,
            "MIA": NBAIcons.MIA,
            "MIL": NBAIcons.MIL,
            "MIN": NBAIcons.MIN,
            "NOP": NBAIcons.NOP,
            "NYK": NBAIcons.NYK,
            "OKC": NBAIcons.OKC,
            "ORL": NBAIcons.ORL,
            "PHI": NBAIcons.PHI,
            "PHX": NBAIcons.PHX,
            "POR": NBAIcons.POR,
            "SAC": NBAIcons.SAC,
            "SAS": NBAIcons.SAS,
            "UTA": NBAIcons.UTA,
            "WAS": NBAIcons.WAS,
    };
    const teamAbbMap = {
        "Atlanta Hawks": "ATL",
        "Boston Celtics": "BOS",
        "Brooklyn Nets": "BKN",
        "Charlotte Hornets": "CHA",
        "Chicago Bulls": "CHI",
        "Cleveland Cavaliers": "CLE",
        "Dallas Mavericks": "DAL",
        "Denver Nuggets": "DEN",
        "Detroit Pistons": "DET",
        "Golden State Warriors": "GSW",
        "Houston Rockets": "HOU",
        "Indiana Pacers": "IND",
        "LA Clippers": "LAC",
        "Los Angeles Lakers": "LAL",
        "Memphis Grizzlies": "MEM",
        "Miami Heat": "MIA",
        "Milwaukee Bucks": "MIL",
        "Minnesota Timberwolves": "MIN",
        "New Orleans Pelicans": "NOP",
        "New York Knicks": "NYK",
        "Oklahoma City Thunder": "OKC",
        "Orlando Magic": "ORL",
        "Philadelphia 76ers": "PHI",
        "Phoenix Suns": "PHX",
        "Portland Trail Blazers": "POR",
        "Sacramento Kings": "SAC",
        "San Antonio Spurs": "SAS",
        "Toronto Raptors": "TOR",
        "Utah Jazz": "UTA",
        "Washington Wizards": "WAS",
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
        window.open('/box-score', '_blank');
    }
    const handleOddsClick= ()=>{
        //TODO: Redirect to page that shows Odds of game
    }
    const handlePredictClick= ()=>{
        //TODO: Either redirect/dropdown and show predictions of AI Model from API
    }
   return(
    <div style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between', marginTop: '20px', marginBottom: '20px', marginLeft: '30px', marginRight: '30px', width: '100%'}}>
    
        <div style={{marginLeft: '0px', display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '33%'}}>
                <div>{getTeamIcon(teamAbbMap[homeTeam])}</div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', marginLeft: '10px'}}>
                    <p style={{fontSize:'20px', fontWeight:'800', color: "black"}}>{teamAbbMap[homeTeam]}</p>

                    <p style={{fontSize:'14px', fontWeight:'400'}}>{homeTeam}</p>

                    <p style={{fontSize:'14px', fontWeight:'400'}}>(Home)</p>
                </div>
                
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft:'10px', marginRight:'10px', width: '33%'}}>
                <p style={{fontSize:'20px', fontWeight:'800', color: "black"}}>VS</p>
                <p style={{fontSize:'14px', fontWeight:'400'}}>{formatTime(schedule)}</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '33%', justifyContent: 'end'}}>
                
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'end',  marginRight: '10px'}}>
                    <p style={{fontSize:'20px', fontWeight:'800', color: "black"}}>{teamAbbMap[awayTeam]}</p>

                    <p style={{fontSize:'14px', fontWeight:'400'}}>{awayTeam}</p>

                    <p style={{fontSize:'14px', fontWeight:'400'}}>(Away)</p>
                </div>
                <div>{getTeamIcon(teamAbbMap[awayTeam])}</div>
                
            </div>
        </div>
        {isInDropdown ? null : (
        <div style={{display:'flex', flexDirection:'row', justifyContent: 'end', alignItems: 'center', marginRight: '40px', width: '40%'}}>
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
