import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { INBAGame } from '../../types/Game';
import dotenv from 'dotenv';

dotenv.config();

// Base URL for the Sportsradar API
const BASE_URL = 'https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?regions=us&markets=h2h,spreads,totals&oddsFormat=american&bookmakers=draftkings';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        apiKey: process.env.ODDS_API_KEY, // Include the API key as a query parameter
      },
    });

    // Map the response data to the INBAGame interface
    const games: INBAGame[] = response.data.map((game: any) => ({
      id: game.id, // Unique identifier for the game
      homeTeam: game.home_team, // Name of the home team
      awayTeam: game.away_team, // Name of the away team
      schedule: game.commence_time, // Scheduled time of the game
    }));

    res.status(200).json(games); // Send the array of game schedules in the response
  } catch (error) {
    console.error('Error fetching game schedules:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
