import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
    let connection;
    try {
        connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            port: parseInt(process.env.DB_PORT), // Convert port to a number
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        });

        // Dummy data for testing
        const dummyData = {
            id: 78423,
            home_team: 1234123,
            away_team: "12341234",
            date: "2024-03-08",
            location: "Dummy Location",
            odds: 2.5,
            prediction: "123",
            result: "123",
            provider: "Dummy Provider",
            over_odds: 1.8,
            under_odds: 1.9,
            home_odds: 2.0,
            away_odds: 2.1,
            ml_pred: "Dummy ML Prediction",
            ml_conf: 0.75,
            ou_pred: "Dummy OU Prediction",
            ou_conf: 0.8,
            home_score: 3,
            away_score: 1,
            winner: "123",
            name: "Dummy Team",
            wins: 10,
            losses: 5
        };

        // Insert into Games table
        const gameQuery = `
            INSERT INTO Games (id, home_team, away_team, date, location, odds, prediction, result)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const gameValues = [dummyData.id, dummyData.home_team, dummyData.away_team, dummyData.date, dummyData.location, dummyData.odds, dummyData.prediction, dummyData.result];
        await connection.execute(gameQuery, gameValues);

        // Insert into Odds table
        const oddsQuery = `
            INSERT INTO Odds (id, provider, over_odds, under_odds, home_odds, away_odds)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const oddsValues = [dummyData.id, dummyData.provider, dummyData.over_odds, dummyData.under_odds, dummyData.home_odds, dummyData.away_odds];
        await connection.execute(oddsQuery, oddsValues);

        // Insert into Predictions table
        const predictionsQuery = `
            INSERT INTO Predictions (id, ml_pred, ml_conf, ou_pred, ou_conf)
            VALUES (?, ?, ?, ?, ?)
        `;
        const predictionsValues = [dummyData.id, dummyData.ml_pred, dummyData.ml_conf, dummyData.ou_pred, dummyData.ou_conf];
        await connection.execute(predictionsQuery, predictionsValues);

        // Insert into Results table
        const resultsQuery = `
            INSERT INTO Results (id, home_score, away_score, winner)
            VALUES (?, ?, ?, ?)
        `;
        const resultsValues = [dummyData.id, dummyData.home_score, dummyData.away_score, dummyData.winner];
        await connection.execute(resultsQuery, resultsValues);

        // Insert into Teams table
        const teamsQuery = `
            INSERT INTO Teams (id, name, wins, losses)
            VALUES (?, ?, ?, ?)
        `;
        const teamsValues = [dummyData.id, dummyData.name, dummyData.wins, dummyData.losses];
        await connection.execute(teamsQuery, teamsValues);

        res.status(200).json({ message: "Data inserted successfully" });
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}
