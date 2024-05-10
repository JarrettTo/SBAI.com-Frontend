import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { Odds } from '../../../types/Odds';

const BASE_URL = `https://api.the-odds-api.com/v4/sports/baseball_mlb/odds?regions=us&markets=h2h,spreads,totals&dateFormat=iso&oddsFormat=american&bookmakers=draftkings`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        apiKey: process.env.ODDS_API_KEY, // Include the API key as a query parameter
      },
    });

    const odds: Odds[] = response.data.map((item: any) => ({
      id: item.id,
      sport_key: item.sport_key,
      sport_title: item.sport_title,
      commence_time: item.commence_time,
      home_team: item.home_team,
      away_team: item.away_team,
      bookmakers: item.bookmakers.map((bookmaker: any) => ({
        key: bookmaker.key,
        title: bookmaker.title,
        last_update: bookmaker.last_update,
        markets: bookmaker.markets.map((market: any) => ({
          key: market.key,
          last_update: market.last_update,
          outcomes: market.outcomes.map((outcome: any) => ({
            name: outcome.name,
            price: outcome.price,
          })),
        })),
      })),
    }));
    res.status(200).json(odds);

  } catch (error) {
    console.error('Error fetching odds:', error);
    res.status(500).json({ error: 'Error fetching odds' });
  }
}