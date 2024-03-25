import { type Request, type Response} from "express";
import Order from "../models/orderModel";
import asyncHandler from "../middleware/asyncHandler";

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
export const addOrderItems = asyncHandler(async (req: Request, res: Response) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice 
    } = req.body

    if(orderItems && orderItems.length === 0){
        res.status(400)
        throw new Error('No order items')
        return
    }else{
        const order = new Order({
            orderItems: orderItems.map((item: any) => ({
                ...item,
                product: item._id,
                _id: undefined,
            })),
            user: req.user.id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        })

        const createdOrder = await order.save()
        res.status(201).json(createdOrder)
    }
})

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
export const getMyOrders = asyncHandler(async (req: Request, res: Response) => {
    const orders = await Order.find({ user: req.user.id })
    res.status(200).json(orders)
})

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
export const getOrderById = asyncHandler(async (req: Request, res: Response) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email')

    if(order){
        res.status(200).json(order)
    }else{
        res.status(404)
        throw new Error('Order not found')
    }
})

// @desc    Update order to paid
// @route   PUT /api/orders/:id/pay
// @access  Private
export const updateOrderToPaid = asyncHandler(async (_req: Request, res: Response) => {
    res.json({ message: "Update order to paid" });
})

// @desc    Update order to delivered
// @route   PUT /api/orders/:id/deliver
// @access  Private/Admin 
export const updateOrderToDelivered = asyncHandler(async (_req: Request, res: Response) => {
    res.json({ message: "Update order to delivered" });
})

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
export const getOrders = asyncHandler(async (_req: Request, res: Response) => {
    res.json({ message: "Get all orders" });
})

