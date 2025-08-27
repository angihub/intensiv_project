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

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

