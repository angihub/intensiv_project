import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import authRoutes from './auth.js'
import pkg from 'pg'

dotenv.config()

const { Pool } = pkg
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // строка подключения из .env
})

export default pool

const app = express()

app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
app.use(express.json())
app.use(cookieParser())

app.use('/api', authRoutes)

// Корзина
app.post('/api/cart/add', async (req, res) => {
  const { user_id, product_id, quantity } = req.body;
  try {
    const existing = await pool.query(
      'SELECT * FROM cart WHERE user_id = $1 AND product_id = $2',
      [user_id, product_id]
    );
    if (existing.rows.length > 0) {
      await pool.query(
        'UPDATE cart SET quantity = quantity + $1 WHERE user_id = $2 AND product_id = $3',
        [quantity, user_id, product_id]
      );
    } else {
      await pool.query(
        'INSERT INTO cart (user_id, product_id, quantity) VALUES ($1, $2, $3)',
        [user_id, product_id, quantity]
      );
    }
    res.json({ message: 'Товар добавлен в корзину' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Ошибка добавления в корзину' });
  }
});

app.get('/api/cart/:user_id', async (req, res) => {
  const { user_id } = req.params;
  try {
    const result = await pool.query(
      `SELECT c.id, c.quantity, p.name, p.price, p.img 
       FROM cart c 
       JOIN products p ON c.product_id = p.id
       WHERE c.user_id = $1`,
      [user_id]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Ошибка получения корзины' });
  }
});

app.delete('/api/cart/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM cart WHERE id = $1', [id]);
    res.json({ message: 'Товар удалён из корзины' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Ошибка удаления товара' });
  }
});


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

