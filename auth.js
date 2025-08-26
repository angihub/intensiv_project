import express from 'express'
import pool from './clients_server.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const router = express.Router()

// Регистрация
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) return res.status(400).json({ error: 'All fields required' })

  try {
    const hashedPassword = await bcrypt.hash(password, 10)

    const result = await pool.query(
      'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING *',
      [name, email, hashedPassword]
    )

    const user = result.rows[0]
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' })

    res.json({ token, user: { id: user.id, name: user.name, bonus: user.bonus } })
  } catch (err) {
    if (err.code === '23505') {
      return res.status(400).json({ error: 'Email already registered' })
    }
    console.error(err)
    res.status(500).send('Server error')
  }
})

// Вход
router.post('/login', async (req, res) => {
  const { email, password } = req.body

  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email])
  const user = result.rows[0]
  if (!user) return res.status(400).json({ error: 'Invalid credentials' })

  const match = await bcrypt.compare(password, user.password_hash)
  if (!match) return res.status(400).json({ error: 'Invalid credentials' })

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' })

  res.json({ token, user: { id: user.id, name: user.name, bonus: user.bonus } })
})

// Профиль
router.get('/profile', async (req, res) => {
  const authHeader = req.headers.authorization
  if (!authHeader) return res.status(401).json({ error: 'Unauthorized' })

  const token = authHeader.split(' ')[1]
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const result = await pool.query('SELECT id, name, bonus FROM users WHERE id = $1', [decoded.id])
    const user = result.rows[0]
    if (!user) return res.status(404).json({ error: 'User not found' })

    res.json(user)
  } catch (e) {
    res.status(401).json({ error: 'Invalid token' })
  }
})

export default router
