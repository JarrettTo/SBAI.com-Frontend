import axios from 'axios';

// Base URL for the Sportsradar API
const BASE_URL = 'https://api.sportradar.com';

// Get the current date in the format YYYY-MM-DD
const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, '/');

// Import the type definition for INBAGame from the types/Game file
import { INBAGame } from '../../types/Game';

// Function to fetch daily game schedules for NBA
export async function getDailyGameSchedules(apiKey: string): Promise<INBAGame[]> {
  try {
    // Make a GET request to the Sportsradar API to fetch the game schedules
    const response = await axios.get(`${BASE_URL}/nba/trial/v8/en/games/${currentDate}/schedule.json`, {
      params: {
        api_key: apiKey, // Include the API key as a query parameter
      },
    });
    
    // Map the response data to the INBAGame interface
    const games: INBAGame[] = response.data.games.map((game: any) => ({
        id: game.id, // Unique identifier for the game
        homeTeam: game.home.name, // Name of the home team
        awayTeam: game.away.name, // Name of the away team
        arena: game.venue.name, // Name of the arena where the game is scheduled
        scheduledTime: game.scheduled, // Scheduled time of the game
    }));
    
    return games; // Return the array of game schedules
  } catch (error) {
    console.error('Error fetching game schedules:', error); // Log any errors that occur during the API request
    return []; // Return an empty array in case of error
  }
}
