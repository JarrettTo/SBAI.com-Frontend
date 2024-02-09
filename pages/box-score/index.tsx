import React, {useState, useEffect} from 'react';
import { INBABoxScore } from '../../types/Game';



const BoxScore = () => {
  const [HomeboxScore, setHomeBoxScore] = useState<INBABoxScore[]>([sampleHomeBoxScore1, sampleHomeBoxScore2])
  const [AwayboxScore, setAwayBoxScore] = useState<INBABoxScore[]>([sampleAwayBoxScore1, sampleAwayBoxScore2])

  return (
    <div className=''>
      <div className='p-10'>
        <h1 className='text-center text-4xl font-bold'>Box Score</h1>
      </div>
        

      <div className='p-5'>
        <table className='border-spacing-5 border-collape'>
          <thead>
            <tr className='bg-sky-950 text-white'>
              <th className='text-left'>Player</th>
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
              <tr key={HomeboxScore.id} className=''>
                <td>{HomeboxScore.player}</td>
                <td>{HomeboxScore.minuite}</td>
                <td>{HomeboxScore.fieldGoalsMade}</td>
                <td>{HomeboxScore.fieldGoalsAttempted}</td>
                <td>{HomeboxScore.fieldGoalsPercentage}</td>
                <td>{HomeboxScore.threePointstMade}</td>
                <td>{HomeboxScore.threePointsAttempted}</td>
                <td>{HomeboxScore.threePointsPercentage}</td>
                <td>{HomeboxScore.freeThrowsMade}</td>
                <td>{HomeboxScore.freeThrowsAttempted}</td>
                <td>{HomeboxScore.freeThrowsPercentage}</td>
                <td>{HomeboxScore.offensiveRebounds}</td>
                <td>{HomeboxScore.defensiveRebounds}</td>
                <td>{HomeboxScore.totalRebounds}</td>
                <td>{HomeboxScore.assists}</td>
                <td>{HomeboxScore.steals}</td>
                <td>{HomeboxScore.blocks}</td>
                <td>{HomeboxScore.turnovers}</td>
                <td>{HomeboxScore.personalFouls}</td>
                <td>{HomeboxScore.points}</td>
                <td>{HomeboxScore.plusMinus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='p-5'>
        <table className='border-spacing-5 border-collapse'>
          <thead>
            <tr className='bg-sky-950 text-white'>
              <th className='text-left'>Player</th>
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
                <td>{AwayboxScore.player}</td>
                <td>{AwayboxScore.minuite}</td>
                <td>{AwayboxScore.fieldGoalsMade}</td>
                <td>{AwayboxScore.fieldGoalsAttempted}</td>
                <td>{AwayboxScore.fieldGoalsPercentage}</td>
                <td>{AwayboxScore.threePointstMade}</td>
                <td>{AwayboxScore.threePointsAttempted}</td>
                <td>{AwayboxScore.threePointsPercentage}</td>
                <td>{AwayboxScore.freeThrowsMade}</td>
                <td>{AwayboxScore.freeThrowsAttempted}</td>
                <td>{AwayboxScore.freeThrowsPercentage}</td>
                <td>{AwayboxScore.offensiveRebounds}</td>
                <td>{AwayboxScore.defensiveRebounds}</td>
                <td>{AwayboxScore.totalRebounds}</td>
                <td>{AwayboxScore.assists}</td>
                <td>{AwayboxScore.steals}</td>
                <td>{AwayboxScore.blocks}</td>
                <td>{AwayboxScore.turnovers}</td>
                <td>{AwayboxScore.personalFouls}</td>
                <td>{AwayboxScore.points}</td>
                <td>{AwayboxScore.plusMinus}</td>
              </tr>
            ))}
          </tbody>
        </table>
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

