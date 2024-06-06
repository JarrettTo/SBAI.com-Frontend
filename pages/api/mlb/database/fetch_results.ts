import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
    let connection;
    try {
      // Get the current date in Chicago time, or use the provided date parameter
      const clientDate = req.query.date ? new Date(req.query.date) : new Date();
      clientDate.setDate(req.query.date ? clientDate.getDate()+2 : clientDate.getDate()+1)
      const chicagoTime = new Date(clientDate.toLocaleString('en-US', { timeZone: 'America/Chicago' }));
      chicagoTime.setHours(0, 0, 0, 0); // Start of the day in Chicago time
  
      // Since your database stores dates 5 hours ahead of UTC, calculate that offset
      const dbStartDate = new Date(chicagoTime);
      dbStartDate.setHours(dbStartDate.getHours() - 10); // Adjust for +5 hour offset in storage
  
      const dbEndDate = new Date(dbStartDate);
      dbEndDate.setDate(dbEndDate.getDate() + 1); // End of the day
  
      const startDateStr = dbStartDate.toISOString().replace('T', ' ').slice(0, 19);
      const endDateStr = dbEndDate.toISOString().replace('T', ' ').slice(0, 19);
  
      connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        port: parseInt(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
      });
  
      const query = `
        SELECT g.id, g.home_team, g.away_team, p.ml_pred, p.ml_conf, p.ou_pred, p.ou_conf
        FROM MLB_Games g
        JOIN MLB_Predictions p ON g.id = p.id
        WHERE g.schedule >= ? AND g.schedule < ?;
      `;
  
      const [results] = await connection.execute(query, [startDateStr, endDateStr]);
      console.log("RESULTS:", results);
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
