import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { News } from '../../types/News';
import dotenv from 'dotenv';

dotenv.config();

// Base URL for the Sportsradar API
const BASE_URL = 'https://nba-stories.onrender.com/articles';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { team, player } = req.query;

    const response = await axios.get(`${BASE_URL}`, {
      params: {
        team: team,
        player: player,
      },
    });

    // Map the response data to the INBAGame interface
    const news: News[] = response.data.map((article: any) => ({
        title: article.title,
        url: article.url,
        source: article.source,
    }));

    res.status(200).json(news); // Send the array of game schedules in the response
  } catch (error) {
    console.error('Error fetching game schedules:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
