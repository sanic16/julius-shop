import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db'
import productRoutes from './routes/productRoutes' 
import { notFound, errorHandler } from './middleware/errorMiddleware'

dotenv.config()
connectDB()

const app = express()

const port = process.env.PORT || 5000

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
