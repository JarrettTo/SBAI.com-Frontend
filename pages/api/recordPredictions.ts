import mysql from "mysql2/promise";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();


export default async function handler(req, res) {
    let connection;
    const url = process.env.URL;
    const gamePredictions = [
        {"away_team":"Brooklyn Nets", "home_team":"Detroit Pistons", "id":"0", "ml_conf":"70.5%", "ml_pred":"Brooklyn Nets", "ou_conf":"54.5%", "ou_pred":"UNDER 215.5"},
        {"away_team":"Minnesota Timberwolves", "home_team":"Indiana Pacers", "id":"1", "ml_conf":"57.5%", "ml_pred":"Minnesota Timberwolves", "ou_conf":"68.8%", "ou_pred":"UNDER 228"},
        {"away_team":"Miami Heat", "home_team":"Dallas Mavericks", "id":"2", "ml_conf":"55.7%", "ml_pred":"Miami Heat", "ou_conf":"50.1%", "ou_pred":"UNDER 231"},
        {"away_team":"Toronto Raptors", "home_team":"Phoenix Suns", "id":"3", "ml_conf":"77.6%", "ml_pred":"Phoenix Suns", "ou_conf":"55.2%", "ou_pred":"UNDER 231.5"},
        {"away_team":"Chicago Bulls", "home_team":"Golden State Warriors", "id":"4", "ml_conf":"67.8%", "ml_pred":"Golden State Warriors", "ou_conf":"68.8%", "ou_pred":"UNDER 223.5"},
        {"away_team":"San Antonio Spurs", "home_team":"Sacramento Kings", "id":"5", "ml_conf":"75.8%", "ml_pred":"Sacramento Kings", "ou_conf":"61.8%", "ou_pred":"OVER 238.5"},
        {"away_team":"Boston Celtics", "home_team":"Denver Nuggets", "id":"6", "ml_conf":"51.9%", "ml_pred":"Denver Nuggets", "ou_conf":"75.7%", "ou_pred":"UNDER 221.5"}
    ];
    try {
        const response = await axios.get(`${url}today_games`, {
            params: {
              api_key: process.env.API_KEY, // Include the API key as a query parameter
            },
        });
        const gamesFromApi = response.data; // Assuming this is an array of INBAGame
        console.log("RESPONSE:", gamesFromApi);

        connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            port: parseInt(process.env.DB_PORT), // Convert port to a number
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        });

        // Insert games and predictions
        for (const game of gamesFromApi) {
            // Insert into Games table
            const gameQuery = `
                INSERT INTO Games (id, home_team, away_team, date)
                VALUES (?, ?, ?, ?)
            `;
            await connection.execute(gameQuery, [game.id, game.homeTeam, game.awayTeam, game.schedule]);

            // Find matching predictions
            const matchingPrediction = gamePredictions.find(p => 
                p.home_team === game.homeTeam && p.away_team === game.awayTeam);

            if (matchingPrediction) {
                // Remove percent symbol from ml_conf and ou_conf
                const mlConf = parseFloat(matchingPrediction.ml_conf.replace('%', '')) / 100;
                const ouConf = parseFloat(matchingPrediction.ou_conf.replace('%', '')) / 100;

                // Insert into Predictions table
                const predictionsQuery = `
                    INSERT INTO Predictions (id, ml_pred, ml_conf, ou_pred, ou_conf)
                    VALUES (?, ?, ?, ?, ?)
                `;
                await connection.execute(predictionsQuery, [game.id, matchingPrediction.ml_pred, mlConf, matchingPrediction.ou_pred, ouConf]);
            }
        }

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
