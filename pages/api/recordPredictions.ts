import mysql from "mysql2/promise";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

export default async function handler(req, res) {
    let connection;
    const url = process.env.URL;
    const gamePredictions = [
        {"away_team":"Golden State Warriors","home_team":"Miami Heat","id":"0","ml_conf":"60.4%","ml_pred":"Miami Heat","ou_conf":"61.5%","ou_pred":"OVER 218.5"},{"away_team":"Los Angeles Lakers","home_team":"Milwaukee Bucks","id":"1","ml_conf":"72.4%","ml_pred":"Milwaukee Bucks","ou_conf":"71.7%","ou_pred":"UNDER 232"},{"away_team":"Oklahoma City Thunder","home_team":"New Orleans Pelicans","id":"2","ml_conf":"51.1%","ml_pred":"New Orleans Pelicans","ou_conf":"59.5%","ou_pred":"UNDER 223.5"},{"away_team":"Dallas Mavericks","home_team":"Sacramento Kings","id":"3","ml_conf":"55.0%","ml_pred":"Sacramento Kings","ou_conf":"67.7%","ou_pred":"UNDER 236"}
    ];
    try {
        const response = await axios.get(`${url}past_games`, {
            params: {
              api_key: process.env.API_KEY, // Include the API key as a query parameter
            },
        });
        const gamesFromApi = response.data[0]; // Access the inner array
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
            
            // Convert schedule to Chicago time in MySQL timestamp format
            const mysqlTimestamp = new Date(game.schedule).toISOString().slice(0, 19).replace('T', ' ');


            // Insert into Games table
            const gameQuery = `
                INSERT INTO Games (id, homeTeam, awayTeam, schedule)
                VALUES (?, ?, ?, ?)
            `;
            await connection.execute(gameQuery, [game.id, game.homeTeam, game.awayTeam, mysqlTimestamp]);

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
