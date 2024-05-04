import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { IMLBGame } from '../../../../types/Game';
import dotenv from 'dotenv';

dotenv.config();
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// Base URL for the Sportsradar API
const BASE_URL = 'https://api.sportradar.com';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    
    const response = await axios.get(`http://mlb-schedule-api.us-east-1.elasticbeanstalk.com/api/schedule?sportId=1`);
    const games: IMLBGame[] = response.data.dates[0].games.map((game: any) => ({
      homeTeam: game.teams.home.team.name, // Name of the home team
      awayTeam: game.teams.away.team.name, // Name of the away team
      arena: game.venue.name, // Name of the arena where the game is scheduled
      innings: game.scheduledInnings,
      series: game.gamesInSeries,
      seriesGameNumber: game.seriesGameNumber,
      doubleHeader: game.doubleHeader == 'Y',
      tiebreaker: game.tiebreaker == 'Y',
      schedule: game.gameDate, // Scheduled time of the game
    }));

    
    
    
    res.status(200).json(games); // Send the array of game schedules in the response
  } catch (error) {
    console.error('Error fetching game schedules:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
