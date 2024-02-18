import React, {useState, useEffect} from 'react';
import { INBABoxScore } from '../../types/Game';



const BoxScore = () => {
  const [HomeboxScore, setHomeBoxScore] = useState<INBABoxScore[]>([sampleHomeBoxScore1, sampleHomeBoxScore2, sampleHomeBoxScore3])
  const [AwayboxScore, setAwayBoxScore] = useState<INBABoxScore[]>([sampleAwayBoxScore1, sampleAwayBoxScore2])

  return (
    <div className=''>
      <div className='p-10'>
        <h1 className='text-center text-4xl font-bold'>Box Score</h1>
      </div>
        
    <div style={{display : "flex", flexDirection : "column", alignItems:"center", height: "100vh", overflow: 'hidden'}} >
      <div className='p-5' style={{ overflowX: 'auto', maxWidth: '1200px' }}>
        <table className='border-spacing-5 border-collapse' style={{ minWidth: '1500px', fontSize: '16px' }}>
          <thead>
            <tr className='bg-sky-950 text-white'>
              <th className='text-left' style={{ textAlign: 'center', lineHeight: '3'}}>Player</th>
              <th>Min</th>
              <th>FGM</th>
              <th>FGA</th>
              <th>FG%</th>
              <th>3PM</th>
              <th>3PA</th>
              <th>3P%</th>
              <th>FTM</th>
              <th>FTA</th>
              <th>FT%</th>
              <th>OREB</th>
              <th>DREB</th>
              <th>REB</th>
              <th>AST</th>
              <th>STL</th>
              <th>BLK</th>
              <th>TO</th>
              <th>PF</th>
              <th>PTS</th>
              <th>+/-</th>
            </tr>
          </thead>
          <tbody>
            {HomeboxScore.map((HomeboxScore) => (
              <tr key={HomeboxScore.id}>
                <td style={{ color: 'blue', borderRight: '1px solid gray'}}>{HomeboxScore.player}</td>
                <td style={{ textAlign: 'center', lineHeight: '5' }}>{HomeboxScore.minuite}</td>
                <td style={{ textAlign: 'center' }}>{HomeboxScore.fieldGoalsMade}</td>
                <td style={{ textAlign: 'center' }}>{HomeboxScore.fieldGoalsAttempted}</td>
                <td style={{ textAlign: 'center' }}>{HomeboxScore.fieldGoalsPercentage}</td>
                <td style={{ textAlign: 'center' }}>{HomeboxScore.threePointstMade}</td>
                <td style={{ textAlign: 'center' }}>{HomeboxScore.threePointsAttempted}</td>
                <td style={{ textAlign: 'center' }}>{HomeboxScore.threePointsPercentage}</td>
                <td style={{ textAlign: 'center' }}>{HomeboxScore.freeThrowsMade}</td>
                <td style={{ textAlign: 'center' }}>{HomeboxScore.freeThrowsAttempted}</td>
                <td style={{ textAlign: 'center' }}>{HomeboxScore.freeThrowsPercentage}</td>
                <td style={{ textAlign: 'center' }}>{HomeboxScore.offensiveRebounds}</td>
                <td style={{ textAlign: 'center' }}>{HomeboxScore.defensiveRebounds}</td>
                <td style={{ textAlign: 'center' }}>{HomeboxScore.totalRebounds}</td>
                <td style={{ textAlign: 'center' }}>{HomeboxScore.assists}</td>
                <td style={{ textAlign: 'center' }}>{HomeboxScore.steals}</td>
                <td style={{ textAlign: 'center' }}>{HomeboxScore.blocks}</td>
                <td style={{ textAlign: 'center' }}>{HomeboxScore.turnovers}</td>
                <td style={{ textAlign: 'center' }}>{HomeboxScore.personalFouls}</td>
                <td style={{ textAlign: 'center' }}>{HomeboxScore.points}</td>
                <td style={{ textAlign: 'center' }}>{HomeboxScore.plusMinus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    

      <div className='p-5' style={{ overflowX: 'auto', maxWidth: '1200px' }}>
        <table className='border-spacing-5 border-collapse' style={{ minWidth: '1500px', fontSize: '16px' }}>
          <thead>
            <tr className='bg-sky-950 text-white'>
              <th className='text-left' style={{ textAlign: 'center', lineHeight: '3' }}>Player</th>
              <th>Min</th>
              <th>FGM</th>
              <th>FGA</th>
              <th>FG%</th>
              <th>3PM</th>
              <th>3PA</th>
              <th>3P%</th>
              <th>FTM</th>
              <th>FTA</th>
              <th>FT%</th>
              <th>OREB</th>
              <th>DREB</th>
              <th>REB</th>
              <th>AST</th>
              <th>STL</th>
              <th>BLK</th>
              <th>TO</th>
              <th>PF</th>
              <th>PTS</th>
              <th>+/-</th>
            </tr>
          </thead>
          <tbody>
            {AwayboxScore.map((AwayboxScore) => (
              <tr key={AwayboxScore.id} className=''>
                <td style={{ color: 'blue', borderRight: '1px solid gray'}}>{AwayboxScore.player}</td>
                <td style={{ textAlign: 'center', lineHeight: '5' }}>{AwayboxScore.minuite}</td>
                <td style={{ textAlign: 'center' }}>{AwayboxScore.fieldGoalsMade}</td>
                <td style={{ textAlign: 'center' }}>{AwayboxScore.fieldGoalsAttempted}</td>
                <td style={{ textAlign: 'center' }}>{AwayboxScore.fieldGoalsPercentage}</td>
                <td style={{ textAlign: 'center' }}>{AwayboxScore.threePointstMade}</td>
                <td style={{ textAlign: 'center' }}>{AwayboxScore.threePointsAttempted}</td>
                <td style={{ textAlign: 'center' }}>{AwayboxScore.threePointsPercentage}</td>
                <td style={{ textAlign: 'center' }}>{AwayboxScore.freeThrowsMade}</td>
                <td style={{ textAlign: 'center' }}>{AwayboxScore.freeThrowsAttempted}</td>
                <td style={{ textAlign: 'center' }}>{AwayboxScore.freeThrowsPercentage}</td>
                <td style={{ textAlign: 'center' }}>{AwayboxScore.offensiveRebounds}</td>
                <td style={{ textAlign: 'center' }}>{AwayboxScore.defensiveRebounds}</td>
                <td style={{ textAlign: 'center' }}>{AwayboxScore.totalRebounds}</td>
                <td style={{ textAlign: 'center' }}>{AwayboxScore.assists}</td>
                <td style={{ textAlign: 'center' }}>{AwayboxScore.steals}</td>
                <td style={{ textAlign: 'center' }}>{AwayboxScore.blocks}</td>
                <td style={{ textAlign: 'center' }}>{AwayboxScore.turnovers}</td>
                <td style={{ textAlign: 'center' }}>{AwayboxScore.personalFouls}</td>
                <td style={{ textAlign: 'center' }}>{AwayboxScore.points}</td>
                <td style={{ textAlign: 'center' }}>{AwayboxScore.plusMinus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>  
    </div>
  );
}

export default BoxScore;

const sampleHomeBoxScore1 : INBABoxScore = {
  id: 1,
  position: "F",
  player: "Lebron James",
  minuite: 34,
  fieldGoalsMade: 10,
  fieldGoalsAttempted: 20,
  fieldGoalsPercentage: 50,
  threePointstMade: 3,
  threePointsAttempted: 5,
  threePointsPercentage: 60,
  freeThrowsMade: 5,
  freeThrowsAttempted: 7,
  freeThrowsPercentage: 70,
  offensiveRebounds: 2,
  defensiveRebounds: 8,
  totalRebounds: 10,
  assists: 8,
  steals: 2,
  blocks: 1,
  turnovers: 3,
  personalFouls: 2,
  points: 28,
  plusMinus: 10
}

const sampleHomeBoxScore2 : INBABoxScore = {
  id: 2,
  position: "C",
  player: "Anthony Davis",
  minuite: 30,
  fieldGoalsMade: 8,
  fieldGoalsAttempted: 15,
  fieldGoalsPercentage: 53,
  threePointstMade: 0,
  threePointsAttempted: 2,
  threePointsPercentage: 0,
  freeThrowsMade: 4,
  freeThrowsAttempted: 5,
  freeThrowsPercentage: 80,
  offensiveRebounds: 3,
  defensiveRebounds: 7,
  totalRebounds: 10,
  assists: 3,
  steals: 1,
  blocks: 3,
  turnovers: 2,
  personalFouls: 3,
  points: 20,
  plusMinus: 8
}

const sampleHomeBoxScore3 : INBABoxScore = {
  id: 3,
  position: "F",
  player: "Mikal Bridges",
  minuite: 32,
  fieldGoalsMade: 7,
  fieldGoalsAttempted: 16,
  fieldGoalsPercentage: 43,
  threePointstMade: 5,
  threePointsAttempted: 12,
  threePointsPercentage: 41,
  freeThrowsMade: 4,
  freeThrowsAttempted: 5,
  freeThrowsPercentage: 80,
  offensiveRebounds: 1,
  defensiveRebounds: 2,
  totalRebounds: 3,
  assists: 4,
  steals: 0,
  blocks: 0,
  turnovers: 1,
  personalFouls: 2,
  points: 23,
  plusMinus: 6
}

const sampleAwayBoxScore1 : INBABoxScore = {
  id: 1,
  position: "G",
  player: "Stephen Curry",
  minuite: 34,
  fieldGoalsMade: 12,
  fieldGoalsAttempted: 25,
  fieldGoalsPercentage: 48,
  threePointstMade: 5,
  threePointsAttempted: 10,
  threePointsPercentage: 50,
  freeThrowsMade: 3,
  freeThrowsAttempted: 3,
  freeThrowsPercentage: 100,
  offensiveRebounds: 1,
  defensiveRebounds: 5,
  totalRebounds: 6,
  assists: 10,
  steals: 3,
  blocks: 0,
  turnovers: 4,
  personalFouls: 3,
  points: 32,
  plusMinus: -5
}

const sampleAwayBoxScore2 : INBABoxScore = {
  id: 2,
  position: "SG",
  player: "Klay Thompson",
  minuite: 30,
  fieldGoalsMade: 8,
  fieldGoalsAttempted: 20,
  fieldGoalsPercentage: 40,
  threePointstMade: 3,
  threePointsAttempted: 10,
  threePointsPercentage: 30,
  freeThrowsMade: 4,
  freeThrowsAttempted: 5,
  freeThrowsPercentage: 80,
  offensiveRebounds: 1,
  defensiveRebounds: 3,
  totalRebounds: 4,
  assists: 2,
  steals: 1,
  blocks: 1,
  turnovers: 2,
  personalFouls: 3,
  points: 23,
  plusMinus: -8
}

