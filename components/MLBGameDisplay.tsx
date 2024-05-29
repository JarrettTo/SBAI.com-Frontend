import React, { useEffect, useState} from 'react';
import { IMLBGame, INBAGame} from '../types/Game';
import * as MLBIcons from 'react-mlb-logos';
import { Button } from '@mui/material';
import styles from './GameDisplay.module.css'
import { motion, AnimatePresence } from "framer-motion"

interface GameDisplayProps extends IMLBGame {
    isInDropdown?: boolean;
    }

const MLBGameDisplay: React.FC<GameDisplayProps> = (props) =>{
   const {id, homeTeam, awayTeam, schedule,  isInDropdown = false, odds, predictions, seriesGameNumber, innings, series, doubleHeader, tiebreaker} = props;
   const [showOdds, setShowOdds] = useState<boolean>(false);
   const [showPreds, setShowPreds] = useState<boolean>(false);
   const teamIconMap = {
        "ARI": MLBIcons.ARI,
        "ATL": MLBIcons.ATL,
        "BAL": MLBIcons.BAL,
        "BOS": MLBIcons.BOS,
        "CHC": MLBIcons.CHC,
        "CHW": MLBIcons.CHW,
        "CIN": MLBIcons.CIN,
        "CLE": MLBIcons.CLE,
        "COL": MLBIcons.COL,
        "DET": MLBIcons.DET,
        "HOU": MLBIcons.HOU,
        "KAN": MLBIcons.KAN,
        "KCR": MLBIcons.KAN,
        "LAA": MLBIcons.LAA,
        "LAD": MLBIcons.LAD,
        "MIA": MLBIcons.MIA,
        "MIL": MLBIcons.MIL,
        "MIN": MLBIcons.MIN,
        "NYM": MLBIcons.NYM,
        "NYY": MLBIcons.NYY,
        "OAK": MLBIcons.OAK,
        "PHI": MLBIcons.PHI,
        "PIT": MLBIcons.PIT,
        "SD": MLBIcons.SD,
        "SDP": MLBIcons.SD,
        "SFG": MLBIcons.SF,
        "SF": MLBIcons.SF,
        "SEA": MLBIcons.SEA,
        "STL": MLBIcons.STL,
        "TB": MLBIcons.TB,
        "TBR": MLBIcons.TB,
        "TEX": MLBIcons.TEX,
        "TOR": MLBIcons.TOR,
        "WAS": MLBIcons.WAS,
        "WSN": MLBIcons.WAS,
    };
    const teamAbbMap = {
        "Arizona Diamondbacks": "ARI",
        "Atlanta Braves": "ATL",
        "Baltimore Orioles": "BAL",
        "Boston Red Sox": "BOS",
        "Chicago Cubs": "CHC",
        "Chicago White Sox": "CHW", 
        "Cincinnati Reds": "CIN",
        "Cleveland Guardians": "CLE",
        "Colorado Rockies": "COL",
        "Detroit Tigers": "DET",
        "Houston Astros": "HOU",
        "Kansas City Royals": "KAN",  
        "Los Angeles Angels": "LAA",
        "Los Angeles Dodgers": "LAD",
        "Miami Marlins": "MIA",
        "Milwaukee Brewers": "MIL",
        "Minnesota Twins": "MIN",
        "New York Mets": "NYM",
        "New York Yankees": "NYY",
        "Oakland Athletics": "OAK",
        "Philadelphia Phillies": "PHI",
        "Pittsburgh Pirates": "PIT",
        "San Diego Padres": "SD",
        "San Francisco Giants": "SFG",
        "Seattle Mariners": "SEA",
        "St. Louis Cardinals": "STL",
        "Tampa Bay Rays": "TB",
        "Texas Rangers": "TEX",
        "Toronto Blue Jays": "TOR",
        "Washington Nationals": "WAS"
    };
    const oddsMap = {
        away_spread_point: odds?.bookmakers[0]?.markets[1]?.outcomes[0]?.point >= 0 ? `+${odds?.bookmakers[0]?.markets[1]?.outcomes[0]?.point}` : odds?.bookmakers[0]?.markets[1]?.outcomes[0]?.point,
        away_spread_price: odds?.bookmakers[0]?.markets[1]?.outcomes[0]?.price >= 0 ? `+${odds?.bookmakers[0]?.markets[1]?.outcomes[0]?.price}` : odds?.bookmakers[0]?.markets[1]?.outcomes[0]?.price,
        away_totals_name: odds?.bookmakers[0]?.markets[2]?.outcomes[0]?.name.charAt(0),
        away_totals_point: odds?.bookmakers[0]?.markets[2]?.outcomes[0]?.point,
        away_totals_price: odds?.bookmakers[0]?.markets[2]?.outcomes[0]?.price >= 0 ? `+${odds?.bookmakers[0]?.markets[2]?.outcomes[0]?.price}` : odds?.bookmakers[0]?.markets[2]?.outcomes[0]?.price,
        away_h2h_price: odds?.bookmakers[0]?.markets[0]?.outcomes[0]?.price >= 0 ? `+${odds?.bookmakers[0]?.markets[0]?.outcomes[0]?.price}` : odds?.bookmakers[0]?.markets[0]?.outcomes[0]?.price,
        home_spread_point: odds?.bookmakers[0]?.markets[1]?.outcomes[1]?.point >= 0 ? `+${odds?.bookmakers[0]?.markets[1]?.outcomes[1]?.point}` : odds?.bookmakers[0]?.markets[1]?.outcomes[1]?.point,
        home_spread_price: odds?.bookmakers[0]?.markets[1]?.outcomes[1]?.price >= 0 ? `+${odds?.bookmakers[0]?.markets[1]?.outcomes[1]?.price}` : odds?.bookmakers[0]?.markets[1]?.outcomes[1]?.price,
        home_totals_name: odds?.bookmakers[0]?.markets[2]?.outcomes[1]?.name.charAt(0),
        home_totals_point: odds?.bookmakers[0]?.markets[2]?.outcomes[1]?.point,
        home_totals_price: odds?.bookmakers[0]?.markets[2]?.outcomes[1]?.price >= 0 ? `+${odds?.bookmakers[0]?.markets[2]?.outcomes[1]?.price}` : odds?.bookmakers[0]?.markets[2]?.outcomes[1]?.price,
        home_h2h_price: odds?.bookmakers[0]?.markets[0]?.outcomes[1]?.price >= 0 ? `+${odds?.bookmakers[0]?.markets[0]?.outcomes[1]?.price}` : odds?.bookmakers[0]?.markets[0]?.outcomes[1]?.price
    }
    const ouPredColor = /UNDER/.test(predictions?.ou_pred) ? 'red' : /OVER/.test(predictions?.ou_pred) ? 'green' : '#555';
    const getTeamIcon = (teamName: string) => {
        // Look up the component in the teamIconMap by teamName
        const IconComponent = teamIconMap[teamName];
        console.log("CHECK")
        // If a matching component was found, render it; otherwise, return null or a default icon
        return IconComponent ? <IconComponent /> : null;
    };
    const getMiniTeamIcon = (teamName: string) => {
        // Look up the component in the teamIconMap by teamName
        const IconComponent = teamIconMap[teamName];
    
        // If a matching component was found, render it; otherwise, return null or a default icon
        return <IconComponent size={40}/>;// ? <IconComponent /> : null;
    };
    
    const handleBoxScoreClick= ()=>{
        //TODO: Redirect to page that shows box score of game
    }
    const handleOddsClick= ()=>{
        //TODO: Redirect to page that shows Odds of game
        setShowOdds(!showOdds);
    }
    function formatPercentage(value) {
        return `${(parseFloat(value) * 100).toFixed(1)}%`;
      }
      
    const handlePredictClick= ()=>{
        setShowPreds(!showPreds)
    }
    function formatDate(dateString: string): string {
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            timeZone: 'America/Chicago'
        };
    
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    }
    useEffect(()=>{
        console.log("PREDS:", predictions)
    },[])
   return(
    <div className={styles.main} style={{marginBottom: '7px', borderRadius: '10px', height: 'auto'}}>
        <div className={styles.row_container} style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between', paddingTop: '10px', paddingBottom: '20px', paddingLeft: '30px', width: '100%'}}>
        
            <div className={styles.game_display}style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between'}}>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '33%'}}>
                    <div>{getTeamIcon(teamAbbMap[homeTeam])}</div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', marginLeft: '10px'}}>
                        <p className={styles.team} style={{fontSize:'20px', fontWeight:'800', color: "black"}}>{teamAbbMap[homeTeam]}</p>

                        <p className={styles.info} style={{fontSize:'14px', fontWeight:'400'}}>{homeTeam}</p>

                        <p className={styles.info} style={{fontSize:'14px', fontWeight:'400'}}>(Home)</p>
                    </div>
                    
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft:'10px', marginRight:'10px', width: '33%'}}>
                    <p className={styles.vs}>VS</p>
                    <p className={styles.time} style={{fontSize:'14px', fontWeight:'400', textAlign: 'center'}}>{formatDate(schedule.toString() || '')}</p>
                    <p className={styles.time} style={{fontSize:'14px', fontWeight:'400', textAlign: 'center'}}>{innings} Innings</p>
                    <p className={styles.time} style={{fontSize:'14px', fontWeight:'400', textAlign: 'center'}}>Game {seriesGameNumber} of {series}</p>
                    {doubleHeader &&(<p className={styles.time} style={{fontSize:'14px', fontWeight:'400', textAlign: 'center'}}>Double Header</p>)}
                    {tiebreaker &&(<p className={styles.time} style={{fontSize:'14px', fontWeight:'400', textAlign: 'center'}}>Tie Breaker</p>)}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '33%', justifyContent: 'end'}}>
                    
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'end',  marginRight: '10px'}}>
                        <p className={styles.team} style={{fontSize:'20px', fontWeight:'800', color: "black"}}>{teamAbbMap[awayTeam]}</p>

                        <p className={styles.info} style={{fontSize:'14px', fontWeight:'400', textAlign: 'right'}}>{awayTeam}</p>

                        <p className={styles.info} style={{fontSize:'14px', fontWeight:'400'}}>(Away)</p>
                    </div>
                    <div>{getTeamIcon(teamAbbMap[awayTeam])}</div>
                    
                </div>
            </div>
            {isInDropdown ? null : (
            <div className={styles.button_container}style={{display:'flex', flexDirection:'row', alignItems: 'center', paddingRight: '50px'}}>
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
        <AnimatePresence>
            {showOdds && odds && (
            <motion.div layout
                initial={{ opacity: 0, maxHeight: '0px',  }}
                animate={{ opacity: 1,  maxHeight: '500px', }}
                exit={{ opacity: 0, maxHeight: '0px' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
                <div className={styles.odds} style={{ display: 'flex', flexDirection: 'column', padding: '10px 20px 30px'}}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{ width: '30%', padding:'10px 0px', fontSize: '12px', color: '#555'}}>TOMORROW</div>
                    <div style={{ width: '20%', textAlign: 'center', padding:'15px 0px', margin: '2px', color: '#555'}}>SPREAD</div>
                    <div style={{ width: '20%', textAlign: 'center', padding:'15px 0px', margin: '2px', color: '#555'}}>TOTAL</div>
                    <div style={{ width: '20%', textAlign: 'center', padding:'15px 0px', margin: '2px', color: '#555'}}>MONEYLINE</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div  style={{ width: '4%'}}>{getMiniTeamIcon(teamAbbMap[homeTeam])}</div>
                    <div className={styles.team_status} style={{ width: '26%', padding:'10px 0px', color: '#555'}}>{oddsMap['home_team']} (Home)</div>
                    <div style={{ width: '20%', textAlign: 'center', padding:'15px 0px', margin: '2px', backgroundColor: '#f5f5f5', color: '#555'}}>{oddsMap['home_spread_point']}&emsp;{oddsMap['home_spread_price']}</div>
                    <div style={{ width: '20%', textAlign: 'center', padding:'15px 0px', margin: '2px', backgroundColor: '#f5f5f5', color: '#555'}}>{oddsMap['home_totals_name']} {oddsMap['home_totals_point']}&emsp;{oddsMap['home_totals_price']}</div>
                    <div style={{ width: '20%', textAlign: 'center', padding:'15px 0px', margin: '2px', backgroundColor: '#f5f5f5', color: '#555'}}>{oddsMap['home_h2h_price'] ? oddsMap['home_h2h_price'] : '&emsp;'}</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{ width: '4%'}}>{getMiniTeamIcon(teamAbbMap[awayTeam])}</div>
                    <div className={styles.team_status} style={{ width: '26%', padding:'10px 0px', color: '#555'}}>{oddsMap['away_team']} (Away)</div>
                    <div style={{ width: '20%', textAlign: 'center', padding:'15px 0px', margin: '2px', backgroundColor: '#f5f5f5', color: '#555'}}>{oddsMap['away_spread_point']}&emsp;{oddsMap['away_spread_price']}</div>
                    <div style={{ width: '20%', textAlign: 'center', padding:'15px 0px', margin: '2px', backgroundColor: '#f5f5f5', color: '#555'}}>{oddsMap['away_totals_name']} {oddsMap['away_totals_point']}&emsp;{oddsMap['away_totals_price']}</div>
                    <div style={{ width: '20%', textAlign: 'center', padding:'15px 0px', margin: '2px', backgroundColor: '#f5f5f5', color: '#555'}}>{oddsMap['away_h2h_price'] ? oddsMap['away_h2h_price'] : '&emsp;'}</div>
                </div>
            </div>
            </motion.div>
            )}
        </AnimatePresence>
        <AnimatePresence>
            {showPreds && predictions && (
            <motion.div layout
            initial={{ opacity: 0, maxHeight: '0px',}}
            animate={{ opacity: 1,  maxHeight: '500px', }}
            exit={{ opacity: 0, maxHeight: '0px' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
        
            <div className={styles.prediction} style={{display: 'flex', flexDirection:'row', marginTop:'20px',alignItems:'center', paddingBottom: '10px'}}>
                <div style={{display: 'flex', flexDirection:'column', marginRight:'5%',justifyContent:'center' ,  marginBottom:'15px'}} >
                    <p className={styles.prediction_type} style={{color: '#555'}}>Moneyline Prediction:</p>
                    <div style={{display:'flex', flexDirection:'row',  alignItems:'center'}}>
                        <div style={{ width: '4%',marginRight:'40px'}}>{getMiniTeamIcon(predictions.ml_pred)}</div>
                        <p className={styles.prediction_value} style={{color: 'green',fontWeight:'700',}}>{predictions.ml_pred}</p>
                        <p className={styles.prediction_conf} style={{ fontWeight:'400', marginLeft:'8px'}}>{predictions.ml_conf?formatPercentage(predictions.ml_conf) : null}</p>
                    </div>
                </div>
                <div className={styles.ou_prediction} style={{display: 'flex', flexDirection:'column', marginLeft:'5%', justifyContent:'center' , marginBottom:'15px'}}>
                    <p className={styles.prediction_type_ou} style={{color: '#555'}}>Total Runs:</p>
                    <div style={{display:'flex', flexDirection:'row',  alignItems:'center'}}>
                        <p className={styles.prediction_value} style={{color: ouPredColor, fontWeight:'700'}}>{predictions?.ou_pred}</p>
                        {/*<p className={styles.prediction_conf} style={{fontWeight:'400', marginLeft:'8px'}}>{}</p>*/}
                    </div>
                </div>
            </div>
            </motion.div>
            )}
        </AnimatePresence>
    </div>
    
    )
    
    } 
export default MLBGameDisplay;

