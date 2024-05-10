import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
    let connection;
    try {
        const dateParam = req.query.date;
        if (!dateParam) {
            res.status(400).json({ error: "No date provided" });
            return;
        }
        const requestedDate = new Date(dateParam).toISOString().split('T')[0];
        const nextDay = new Date(requestedDate);
        nextDay.setDate(nextDay.getDate() + 1);
        const nextDayStr = nextDay.toISOString().split('T')[0];
        connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            port: parseInt(process.env.DB_PORT), // Convert port to a number
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        });

        // const query = `
        // SELECT g.id, g.home_team, g.away_team, g.schedule, g.location, g.odds,
        // o.away_spread_point, o.away_spread_price, o.away_totals_name, o.away_totals_point, o.away_totals_price, o.away_h2h_price,
        // o.home_spread_point, o.home_spread_price, o.home_totals_name, o.home_totals_point, o.home_totals_price, o.home_h2h_price
        // FROM Games g
        // JOIN Odds o ON g.id = o.id
        // WHERE CONVERT_TZ(g.schedule, 'UTC', 'America/Chicago') >= ?
        // AND CONVERT_TZ(g.schedule, 'UTC', 'America/Chicago') < ?;
        // `;

        const query = `
        SELECT g.id, g.home_team, g.away_team, g.schedule, g.location, g.odds,
        p.ml_pred, p.ml_conf, p.ou_pred, p.ou_conf
        FROM Games g
        JOIN Predictions p ON g.id = p.id
        WHERE CONVERT_TZ(g.schedule, 'UTC', 'America/Chicago') >= ?
        AND CONVERT_TZ(g.schedule, 'UTC', 'America/Chicago') < ?;
        `;
        
        const [results] = await connection.execute(query, [requestedDate + ' 00:00:00', nextDayStr + ' 00:00:00']);

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
