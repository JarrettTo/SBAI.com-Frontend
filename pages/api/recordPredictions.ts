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

        const gamePredictions = [
            {"away_team":"Brooklyn Nets", "home_team":"Detroit Pistons", "id":"0", "ml_conf":"70.5%", "ml_pred":"Brooklyn Nets", "ou_conf":"54.5%", "ou_pred":"UNDER 215.5"},
            {"away_team":"Minnesota Timberwolves", "home_team":"Indiana Pacers", "id":"1", "ml_conf":"57.5%", "ml_pred":"Minnesota Timberwolves", "ou_conf":"68.8%", "ou_pred":"UNDER 228"},
            {"away_team":"Miami Heat", "home_team":"Dallas Mavericks", "id":"2", "ml_conf":"55.7%", "ml_pred":"Miami Heat", "ou_conf":"50.1%", "ou_pred":"UNDER 231"},
            {"away_team":"Toronto Raptors", "home_team":"Phoenix Suns", "id":"3", "ml_conf":"77.6%", "ml_pred":"Phoenix Suns", "ou_conf":"55.2%", "ou_pred":"UNDER 231.5"},
            {"away_team":"Chicago Bulls", "home_team":"Golden State Warriors", "id":"4", "ml_conf":"67.8%", "ml_pred":"Golden State Warriors", "ou_conf":"68.8%", "ou_pred":"UNDER 223.5"},
            {"away_team":"San Antonio Spurs", "home_team":"Sacramento Kings", "id":"5", "ml_conf":"75.8%", "ml_pred":"Sacramento Kings", "ou_conf":"61.8%", "ou_pred":"OVER 238.5"},
            {"away_team":"Boston Celtics", "home_team":"Denver Nuggets", "id":"6", "ml_conf":"51.9%", "ml_pred":"Denver Nuggets", "ou_conf":"75.7%", "ou_pred":"UNDER 221.5"}
        ];

        for (const prediction of gamePredictions) {
            // Remove percent symbol from ml_conf and ou_conf
            const mlConf = parseFloat(prediction.ml_conf.replace('%', '')) / 100;
            const ouConf = parseFloat(prediction.ou_conf.replace('%', '')) / 100;

            // Insert into Games table
            const gameQuery = `
                INSERT INTO Games (id, home_team, away_team)
                VALUES (?, ?, ?)
            `;
            const gameValues = [prediction.id, prediction.home_team, prediction.away_team];
            await connection.execute(gameQuery, gameValues);

            // Insert into Predictions table
            const predictionsQuery = `
                INSERT INTO Predictions (id, ml_pred, ml_conf, ou_pred, ou_conf)
                VALUES (?, ?, ?, ?, ?)
            `;
            const predictionsValues = [prediction.id, prediction.ml_pred, mlConf, prediction.ou_pred, ouConf];
            await connection.execute(predictionsQuery, predictionsValues);
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
