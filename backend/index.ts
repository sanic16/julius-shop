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
import path from 'path'

dotenv.config()
connectDB()

const app = express()

const port = process.env.PORT || 5000

if(process.env.NODE_ENV==='development'){
  app.use(credentials)

  app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
  }))
}

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cookieParser())



app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

app.use(express.static(path.join(__dirname, '/react')))
app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '/react/index.html'))
    console.log(path.join(__dirname, '/react/index.html'))
})

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
