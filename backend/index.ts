import express from 'express'
import products from './data/products'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

const port = process.env.PORT || 5000

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.get('/api/products', (_req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const { id } = req.params
    const product = products.find(product => product._id === id)
    res.json(product)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
