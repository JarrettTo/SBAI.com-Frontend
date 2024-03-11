import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { INBAGame } from '../../types/Game';
import dotenv from 'dotenv';

dotenv.config();
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// Base URL for the Sportsradar API
const BASE_URL = 'https://api.sportradar.com';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Get the current date in the format YYYY-MM-DD
    let retval = []
    const date = new Date().toLocaleString("en-US", { timeZone: 'America/Chicago' });
    const currentDate = new Date(date); // Convert the string back to a Date object for manipulation
    for(let i=1; i<=2;i++){
      currentDate.setDate(currentDate.getDate() + 1);
      let formattedDate = currentDate.toISOString().slice(0, 10).replace(/-/g, '/');
      console.log(formattedDate);
      
      // Make a GET request to the Sportsradar API to fetch the game schedules
      const response = await axios.get(`${BASE_URL}/nba/trial/v8/en/games/${formattedDate}/schedule.json`, {
        params: {
          api_key: process.env.API_KEY, // Include the API key as a query parameter
        },
      });

      // Map the response data to the INBAGame interface
      const games: INBAGame[] = response.data.games.map((game: any) => ({
        id: game.id, // Unique identifier for the game
        homeTeam: game.home.name, // Name of the home team
        awayTeam: game.away.name, // Name of the away team
        arena: game.venue.name, // Name of the arena where the game is scheduled
        schedule: game.scheduled, // Scheduled time of the game
      }));
      retval.push(games)
      await delay(1000);
    }
    
    
    res.status(200).json(retval); // Send the array of game schedules in the response
  } catch (error) {
    console.error('Error fetching game schedules:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
