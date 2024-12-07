import mysql from 'mysql2/promise';

const poolConnection = await mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'food_ordering_db',
});

export default poolConnection;
