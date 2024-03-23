import { type Request, type Response} from 'express'
import asyncHandler from '../middleware/asyncHandler'
import Product from '../models/productModel'

// @desc    Fetch all products
// @route   GET /api/products   
// @access  Public 
const getProducts = asyncHandler(async(_req: Request, res: Response) => {
    const products = await Product.find({})
    res.json(products)
})

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async(req: Request, res: Response) => {
    const product = await Product.findById(req.params.id)
    if(product){
        return res.json(product)
    }
    throw new Error('Product not found')
})

export { getProducts, getProductById }