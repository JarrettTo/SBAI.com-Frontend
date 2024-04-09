import mysql from "mysql2/promise";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

export default async function handler(req, res) {
    let connection;
    const url = process.env.URL;
    const gamePredictions = [{"away_team":"Indiana Pacers","home_team":"Toronto Raptors","id":"0","ml_conf":"57.2%","ml_pred":"Indiana Pacers","ou_conf":"64.3%","ou_pred":"OVER 239.5"},{"away_team":"Dallas Mavericks","home_team":"Charlotte Hornets","id":"1","ml_conf":"70.4%","ml_pred":"Dallas Mavericks","ou_conf":"57.3%","ou_pred":"UNDER 223"},{"away_team":"Detroit Pistons","home_team":"Philadelphia 76ers","id":"2","ml_conf":"83.2%","ml_pred":"Philadelphia 76ers","ou_conf":"58.8%","ou_pred":"OVER 223"},{"away_team":"Miami Heat","home_team":"Atlanta Hawks","id":"3","ml_conf":"55.7%","ml_pred":"Miami Heat","ou_conf":"53.9%","ou_pred":"UNDER 219.5"},{"away_team":"Boston Celtics","home_team":"Milwaukee Bucks","id":"4","ml_conf":"52.2%","ml_pred":"Boston Celtics","ou_conf":"52.7%","ou_pred":"OVER 228"},{"away_team":"Orlando Magic","home_team":"Houston Rockets","id":"5","ml_conf":"50.4%","ml_pred":"Houston Rockets","ou_conf":"51.0%","ou_pred":"UNDER 215.5"},{"away_team":"New York Knicks","home_team":"Chicago Bulls","id":"6","ml_conf":"57.1%","ml_pred":"New York Knicks","ou_conf":"52.4%","ou_pred":"OVER 212.5"},{"away_team":"Washington Wizards","home_team":"Minnesota Timberwolves","id":"7","ml_conf":"86.3%","ml_pred":"Minnesota Timberwolves","ou_conf":"64.6%","ou_pred":"UNDER 224"},{"away_team":"San Antonio Spurs","home_team":"Memphis Grizzlies","id":"8","ml_conf":"51.3%","ml_pred":"San Antonio Spurs","ou_conf":"77.1%","ou_pred":"OVER 217"},{"away_team":"Sacramento Kings","home_team":"Oklahoma City Thunder","id":"9","ml_conf":"72.2%","ml_pred":"Oklahoma City Thunder","ou_conf":"54.4%","ou_pred":"OVER 227.5"},{"away_team":"Denver Nuggets","home_team":"Utah Jazz","id":"10","ml_conf":"62.7%","ml_pred":"Denver Nuggets","ou_conf":"52.2%","ou_pred":"UNDER 225"},{"away_team":"LA Clippers","home_team":"Phoenix Suns","id":"11","ml_conf":"52.5%","ml_pred":"Phoenix Suns","ou_conf":"61.1%","ou_pred":"UNDER 226.5"},{"away_team":"New Orleans Pelicans","home_team":"Portland Trail Blazers","id":"12","ml_conf":"77.7%","ml_pred":"New Orleans Pelicans","ou_conf":"69.4%","ou_pred":"UNDER 213"},{"away_team":"Golden State Warriors","home_team":"Los Angeles Lakers","id":"13","ml_conf":"62.2%","ml_pred":"Los Angeles Lakers","ou_conf":"59.8%","ou_pred":"UNDER 235.5"}]
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
            port: parseInt(process.env.DB_PORT!!), // Convert port to a number
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        });

        // Insert games and predictions
        for (const game of gamesFromApi) {

            const mysqlTimestamp = new Date(game.schedule).toISOString().slice(0, 19).replace('T', ' ');

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
