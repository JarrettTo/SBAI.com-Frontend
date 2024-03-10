import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { Predictions } from '../../types/Predictions';
import dotenv from 'dotenv';

dotenv.config();

// Base URL for the Sportsradar API
const BASE_URL = 'http://3.101.18.227:8080/predict';

const teamNameMap: Record<string, string> = {
  'LA Clippers': 'Los Angeles Clippers',
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(`${BASE_URL}`);

    // Map the response data to the INBAGame interface
    const predictions: Predictions[] = response.data.map((game: any) => ({
        id: game.id,
        home_team: teamNameMap[game.home_team] || game.home_team,
        away_team: teamNameMap[game.away_team] || game.away_team,
        ml_pred: teamNameMap[game.ml_pred] || game.ml_pred,
        ml_conf: game.ml_conf,
        ou_pred: game.ou_pred,
        ou_conf: game.ou_conf
    }));

    res.status(200).json(predictions); // Send the array of game schedules in the response
  } catch (error) {
    console.error('Error fetching game predictions:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}