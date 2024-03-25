import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import connectDB from './config/db'
import productRoutes from './routes/productRoutes' 
import userRoutes from './routes/userRoutes'
import orderRoutes from './routes/orderRoutes'
import { notFound, errorHandler } from './middleware/errorMiddleware'
import cors from 'cors'
import { credentials } from './middleware/credentials'

dotenv.config()
connectDB()

const app = express()

const port = process.env.PORT || 5000

app.use(credentials)

app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173'
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cookieParser())

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
