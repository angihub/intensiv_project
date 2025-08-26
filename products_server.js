import express from 'express';
import cors from 'cors';
import pkg from 'pg';
const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',         // твой логин postgres
  host: '127.0.0.1',
  database: 'postgres',      // твоя база
  password: 'tidurachok777',  // пароль от postgres
  port: 5432,
});

pool.connect((err) => {
 if (err) {
 console.error('Database connection error:', err.message);
 } else {
 console.log('Database connection successful');
 }
});

app.get('/api/products', async (req, res) => {
 try {
 const result = await pool.query('SELECT * FROM products');
 res.json(result.rows);
 } catch (err) {
 res.status(500).json({ error: err.message });
 }
});

app.listen(3000, () => {
 console.log('Server running on http://localhost:3000');
});