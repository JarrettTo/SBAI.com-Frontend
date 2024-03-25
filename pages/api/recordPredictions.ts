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
        {"away_team":"Brooklyn Nets","home_team":"New York Knicks","id":"0","ml_conf":"72.2%","ml_pred":"New York Knicks","ou_conf":"53.8%","ou_pred":"OVER 205"},{"away_team":"Sacramento Kings","home_team":"Orlando Magic","id":"1","ml_conf":"57.9%","ml_pred":"Orlando Magic","ou_conf":"65.9%","ou_pred":"OVER 216.5"},{"away_team":"Charlotte Hornets","home_team":"Atlanta Hawks","id":"2","ml_conf":"69.0%","ml_pred":"Atlanta Hawks","ou_conf":"58.1%","ou_pred":"OVER 214.5"},{"away_team":"Boston Celtics","home_team":"Chicago Bulls","id":"3","ml_conf":"60.4%","ml_pred":"Boston Celtics","ou_conf":"59.6%","ou_pred":"UNDER 221"},{"away_team":"Phoenix Suns","home_team":"San Antonio Spurs","id":"4","ml_conf":"71.9%","ml_pred":"Phoenix Suns","ou_conf":"55.6%","ou_pred":"OVER 228.5"},{"away_team":"Utah Jazz","home_team":"Houston Rockets","id":"5","ml_conf":"66.3%","ml_pred":"Houston Rockets","ou_conf":"74.9%","ou_pred":"OVER 228.5"},{"away_team":"Toronto Raptors","home_team":"Washington Wizards","id":"6","ml_conf":"59.2%","ml_pred":"Toronto Raptors","ou_conf":"51.6%","ou_pred":"OVER 232"},{"away_team":"Denver Nuggets","home_team":"Portland Trail Blazers","id":"7","ml_conf":"74.2%","ml_pred":"Denver Nuggets","ou_conf":"81.8%","ou_pred":"UNDER 210.5"}
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
