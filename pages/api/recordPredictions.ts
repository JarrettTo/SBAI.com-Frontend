import mysql from "mysql2/promise";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

export default async function handler(req, res) {
    let connection;
    const url = process.env.URL;
    const gamePredictions = [
        {"away_team":"Los Angeles Lakers","home_team":"Washington Wizards","id":"0","ml_conf":"67.8%","ml_pred":"Los Angeles Lakers","ou_conf":"59.9%","ou_pred":"OVER 233.5"},{"away_team":"Portland Trail Blazers","home_team":"Charlotte Hornets","id":"1","ml_conf":"50.6%","ml_pred":"Charlotte Hornets","ou_conf":"54.1%","ou_pred":"OVER 212.5"},{"away_team":"Detroit Pistons","home_team":"Atlanta Hawks","id":"2","ml_conf":"74.0%","ml_pred":"Atlanta Hawks","ou_conf":"54.3%","ou_pred":"OVER 224.5"},{"away_team":"Indiana Pacers","home_team":"Brooklyn Nets","id":"3","ml_conf":"52.1%","ml_pred":"Indiana Pacers","ou_conf":"56.0%","ou_pred":"OVER 230.5"},{"away_team":"Oklahoma City Thunder","home_team":"Boston Celtics","id":"4","ml_conf":"71.6%","ml_pred":"Boston Celtics","ou_conf":"82.4%","ou_pred":"UNDER 231.5"},{"away_team":"Toronto Raptors","home_team":"Minnesota Timberwolves","id":"5","ml_conf":"85.8%","ml_pred":"Minnesota Timberwolves","ou_conf":"58.6%","ou_pred":"OVER 215"},{"away_team":"Orlando Magic","home_team":"New Orleans Pelicans","id":"6","ml_conf":"68.5%","ml_pred":"New Orleans Pelicans","ou_conf":"58.4%","ou_pred":"OVER 207.5"},{"away_team":"Memphis Grizzlies","home_team":"Milwaukee Bucks","id":"7","ml_conf":"83.9%","ml_pred":"Milwaukee Bucks","ou_conf":"56.5%","ou_pred":"OVER 220.5"},{"away_team":"Cleveland Cavaliers","home_team":"Phoenix Suns","id":"8","ml_conf":"57.6%","ml_pred":"Phoenix Suns","ou_conf":"51.6%","ou_pred":"UNDER 226.5"}
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
            const mysqlTimestamp = new Date(game.schedule).toISOString().slice(0, 19).replace('T', ' ');


            // Insert into Games table
            const gameQuery = `
                INSERT INTO Games (id, home_team, away_team, schedule)
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
