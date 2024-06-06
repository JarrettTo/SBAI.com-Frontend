import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { IMLBGame } from '../../../../types/Game';
import dotenv from 'dotenv';
import { addDays } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';
import { Predictions } from 'types/Predictions';
dotenv.config();
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// Base URL for the Sportsradar API
const BASE_URL = 'https://api.sportradar.com';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {

    const response = await axios.get(`http://54.176.127.3:4000/predict`);
    res.status(200) 
  } catch (error) {
    console.error('Error fetching game predictions:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
