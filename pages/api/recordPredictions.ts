import mysql from "mysql2/promise";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

// Function to convert UTC to Chicago time
// Function to convert Chicago time to MySQL timestamp format
function convertToMySQLTimestamp(chicagoDateString) {
    const chicagoDate = new Date(chicagoDateString);
    const year = chicagoDate.getFullYear();
    const month = (chicagoDate.getMonth() + 1).toString().padStart(2, '0');
    const day = chicagoDate.getDate().toString().padStart(2, '0');
    const hours = chicagoDate.getHours().toString().padStart(2, '0');
    const minutes = chicagoDate.getMinutes().toString().padStart(2, '0');
    const seconds = chicagoDate.getSeconds().toString().padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}


export default async function handler(req, res) {
    let connection;
    const url = process.env.URL;
    const gamePredictions = [
        {"away_team":"Indiana Pacers","home_team":"Detroit Pistons","id":"0","ml_conf":"61.8%","ml_pred":"Indiana Pacers","ou_conf":"59.8%","ou_pred":"OVER 232.5"},
{"away_team":"Miami Heat","home_team":"Cleveland Cavaliers","id":"1","ml_conf":"67.1%","ml_pred":"Cleveland Cavaliers","ou_conf":"56.4%","ou_pred":"OVER 203.5"},
{"away_team":"Milwaukee Bucks","home_team":"Boston Celtics","id":"2","ml_conf":"76.4%","ml_pred":"Boston Celtics","ou_conf":"69.2%","ou_pred":"UNDER 225.5"},
{"away_team":"Sacramento Kings","home_team":"Toronto Raptors","id":"3","ml_conf":"62.9%","ml_pred":"Sacramento Kings","ou_conf":"66.5%","ou_pred":"OVER 230"},
{"away_team":"Utah Jazz","home_team":"Oklahoma City Thunder","id":"4","ml_conf":"76.0%","ml_pred":"Oklahoma City Thunder","ou_conf":"52.1%","ou_pred":"OVER 231"},
{"away_team":"Memphis Grizzlies","home_team":"Golden State Warriors","id":"5","ml_conf":"74.5%","ml_pred":"Golden State Warriors","ou_conf":"54.4%","ou_pred":"OVER 219.5"},
{"away_team":"Philadelphia 76ers","home_team":"Phoenix Suns","id":"6","ml_conf":"68.5%","ml_pred":"Phoenix Suns","ou_conf":"53.6%","ou_pred":"OVER 220"},
{"away_team":"Los Angeles Clippers","home_team":"Portland Trail Blazers","id":"7","ml_conf":"79.3%","ml_pred":"Los Angeles Clippers","ou_conf":"56.8%","ou_pred":"UNDER 217.5"}
    ];
    try {
        const response = await axios.get(`${url}today_games`, {
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
            const chicagoTimestamp = convertToMySQLTimestamp(game.schedule);


            // Insert into Games table
            const gameQuery = `
                INSERT INTO Games (id, homeTeam, awayTeam, schedule)
                VALUES (?, ?, ?, ?)
            `;
            await connection.execute(gameQuery, [game.id, game.homeTeam, game.awayTeam, chicagoTimestamp]);

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
