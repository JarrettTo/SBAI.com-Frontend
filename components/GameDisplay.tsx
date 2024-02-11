import React from 'react';
import { INBAGame} from '../types/Game';
import * as NBAIcons from 'react-nba-logos';
import { Button } from '@mui/material';
import { useState, useEffect } from "react";

interface GameDisplayProps extends INBAGame {
    isInDropdown?: boolean;
  }

const GameDisplay: React.FC<GameDisplayProps> = (props) =>{
   const {id, homeTeam, homeTeamLogo, awayTeam, awayTeamLogo, schedule,  isInDropdown = false,} = props;
   const [showOdds, setShowOdds] = useState<boolean>(false);
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
    const getMiniTeamIcon = (teamName: string) => {
        // Look up the component in the teamIconMap by teamName
        const IconComponent = teamIconMap[teamName];
    
        // If a matching component was found, render it; otherwise, return null or a default icon
        return <IconComponent size={40}/>;// ? <IconComponent /> : null;
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
        setShowOdds(!showOdds);
    }
    const handlePredictClick= ()=>{
        //TODO: Either redirect/dropdown and show predictions of AI Model from API
    }
   return(
    <div>
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
    {showOdds && (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '10px 20px'}}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{ width: '30%', padding:'10px 0px', fontSize: '12px', color: '#555'}}>TOMORROW</div>
            <div style={{ width: '20%', textAlign: 'center', padding:'15px 0px', margin: '2px', color: '#555'}}>SPREAD</div>
            <div style={{ width: '20%', textAlign: 'center', padding:'15px 0px', margin: '2px', color: '#555'}}>TOTAL</div>
            <div style={{ width: '20%', textAlign: 'center', padding:'15px 0px', margin: '2px', color: '#555'}}>MONEYLINE</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{ width: '4%'}}>{getMiniTeamIcon(teamAbbMap[sampleOdds.away_team])}</div>
            <div style={{ width: '26%', padding:'10px 0px', color: '#555'}}>{oddsMap['away_team']} (Away)</div>
            <div style={{ width: '20%', textAlign: 'center', padding:'15px 0px', margin: '2px', backgroundColor: '#f5f5f5', color: '#555'}}>{oddsMap['away_spread_point']}&emsp;{oddsMap['away_spread_price']}</div>
            <div style={{ width: '20%', textAlign: 'center', padding:'15px 0px', margin: '2px', backgroundColor: '#f5f5f5', color: '#555'}}>{oddsMap['away_totals_name']} {oddsMap['away_totals_point']}&emsp;{oddsMap['away_totals_price']}</div>
            <div style={{ width: '20%', textAlign: 'center', padding:'15px 0px', margin: '2px', backgroundColor: '#f5f5f5', color: '#555'}}>{oddsMap['away_h2h_price']}</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{ width: '4%'}}>{getMiniTeamIcon(teamAbbMap[sampleOdds.home_team])}</div>
            <div style={{ width: '26%', padding:'10px 0px', color: '#555'}}>{oddsMap['home_team']} (Home)</div>
            <div style={{ width: '20%', textAlign: 'center', padding:'15px 0px', margin: '2px', backgroundColor: '#f5f5f5', color: '#555'}}>{oddsMap['home_spread_point']}&emsp;{oddsMap['home_spread_price']}</div>
            <div style={{ width: '20%', textAlign: 'center', padding:'15px 0px', margin: '2px', backgroundColor: '#f5f5f5', color: '#555'}}>{oddsMap['home_totals_name']} {oddsMap['home_totals_point']}&emsp;{oddsMap['home_totals_price']}</div>
            <div style={{ width: '20%', textAlign: 'center', padding:'15px 0px', margin: '2px', backgroundColor: '#f5f5f5', color: '#555'}}>{oddsMap['home_h2h_price']}</div>
        </div>
    </div>)}
    </div>
    )

}
export default GameDisplay;

export interface Root {
    id: string
    sport_key: string
    sport_title: string
    commence_time: string
    home_team: string
    away_team: string
    bookmakers: Bookmaker[]
}
  
export interface Bookmaker {
    key: string
    title: string
    last_update: string
    markets: Market[]
}
  
export interface Market {
    key: string
    last_update: string
    outcomes: Outcome[]
}
  
export interface Outcome {
    name: string
    price: number
    point?: number
}
  
const sampleOdds: Root = {
    "id": "04a4ea52daa7aa07eb08e449ed7f3e92",
    "sport_key": "basketball_nba",
    "sport_title": "NBA",
    "commence_time": "2024-02-11T19:10:00Z",
    "home_team": "Miami Heat",
    "away_team": "Boston Celtics",
    "bookmakers": [
        {
            "key": "draftkings",
            "title": "DraftKings",
            "last_update": "2024-02-11T13:36:39Z",
            "markets": [
                {
                    "key": "h2h",
                    "last_update": "2024-02-11T13:36:39Z",
                    "outcomes": [
                        {
                            "name": "Boston Celtics",
                            "price": -225
                        },
                        {
                            "name": "Miami Heat",
                            "price": 185
                        }
                    ]
                },
                {
                    "key": "spreads",
                    "last_update": "2024-02-11T13:36:39Z",
                    "outcomes": [
                        {
                            "name": "Boston Celtics",
                            "price": -108,
                            "point": -6.0
                        },
                        {
                            "name": "Miami Heat",
                            "price": -112,
                            "point": 6.0
                        }
                    ]
                },
                {
                    "key": "totals",
                    "last_update": "2024-02-11T13:36:39Z",
                    "outcomes": [
                        {
                            "name": "Over",
                            "price": -110,
                            "point": 226.0
                        },
                        {
                            "name": "Under",
                            "price": -110,
                            "point": 226.0
                        }
                    ]
                }
            ]
        }
    ]
};


const oddsMap = {
    away_team: sampleOdds.away_team,
    home_team: sampleOdds.home_team,
    away_spread_point: sampleOdds.bookmakers[0].markets[1].outcomes[0].point >= 0 ? `+${sampleOdds.bookmakers[0].markets[1].outcomes[0].point}` : sampleOdds.bookmakers[0].markets[1].outcomes[0].point,
    away_spread_price: sampleOdds.bookmakers[0].markets[1].outcomes[0].price >= 0 ? `+${sampleOdds.bookmakers[0].markets[1].outcomes[0].price}` : sampleOdds.bookmakers[0].markets[1].outcomes[0].price,
    away_totals_name: sampleOdds.bookmakers[0].markets[2].outcomes[0].name.charAt(0),
    away_totals_point: sampleOdds.bookmakers[0].markets[2].outcomes[0].point,
    away_totals_price: sampleOdds.bookmakers[0].markets[2].outcomes[0].price >= 0 ? `+${sampleOdds.bookmakers[0].markets[2].outcomes[0].price}` : sampleOdds.bookmakers[0].markets[2].outcomes[0].price,
    away_h2h_price: sampleOdds.bookmakers[0].markets[0].outcomes[0].price >= 0 ? `+${sampleOdds.bookmakers[0].markets[0].outcomes[0].price}` : sampleOdds.bookmakers[0].markets[0].outcomes[0].price,
    home_spread_point: sampleOdds.bookmakers[0].markets[1].outcomes[1].point >= 0 ? `+${sampleOdds.bookmakers[0].markets[1].outcomes[1].point}` : sampleOdds.bookmakers[0].markets[1].outcomes[1].point,
    home_spread_price: sampleOdds.bookmakers[0].markets[1].outcomes[1].price >= 0 ? `+${sampleOdds.bookmakers[0].markets[1].outcomes[1].price}` : sampleOdds.bookmakers[0].markets[1].outcomes[1].price,
    home_totals_name: sampleOdds.bookmakers[0].markets[2].outcomes[1].name.charAt(0),
    home_totals_point: sampleOdds.bookmakers[0].markets[2].outcomes[1].point,
    home_totals_price: sampleOdds.bookmakers[0].markets[2].outcomes[1].price >= 0 ? `+${sampleOdds.bookmakers[0].markets[2].outcomes[1].price}` : sampleOdds.bookmakers[0].markets[2].outcomes[1].price,
    home_h2h_price: sampleOdds.bookmakers[0].markets[0].outcomes[1].price >= 0 ? `+${sampleOdds.bookmakers[0].markets[0].outcomes[1].price}` : sampleOdds.bookmakers[0].markets[0].outcomes[1].price
}