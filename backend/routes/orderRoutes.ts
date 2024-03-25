import { Router } from "express";
import {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
    getOrders
} from '../controllers/orderController'
import { protect, admin } from "../middleware/authMiddlware";

const router = Router()

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
router.get('/mine', protect, getMyOrders)
router.get('/:id', protect, protect, getOrderById)
router.put('/:id/pay', protect, updateOrderToPaid)
router.put('/:id/deliver', protect, admin, updateOrderToDelivered)

export default router