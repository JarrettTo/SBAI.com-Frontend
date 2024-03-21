import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

// serverless function in vercel (e.g., api/cron.js)
export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    try {
        // Perform the desired task, such as making an API call
        const response = await axios.get('/api/recordPrediction');
        console.log('API call successful:', response.data);
        res.status(200).end();
    } catch (error) {
        console.error('Error making API call:', error);
        res.status(500).end();
    }
}
