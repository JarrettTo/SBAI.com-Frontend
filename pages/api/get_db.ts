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

        const query = `
            SELECT g.id, g.home_team, g.away_team, g.date, g.location, g.odds, g.prediction, g.result,
                   p.ml_pred, p.ml_conf, p.ou_pred, p.ou_conf
            FROM Games g
            JOIN Predictions p ON g.id = p.id
        `;
        
        const [results] = await connection.execute(query);

        res.status(200).json(results);
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}
