"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = exports.updateOrderToDelivered = exports.updateOrderToPaid = exports.getOrderById = exports.getMyOrders = exports.addOrderItems = void 0;
const orderModel_1 = __importDefault(require("../models/orderModel"));
const asyncHandler_1 = __importDefault(require("../middleware/asyncHandler"));
// @desc    Create new order
// @route   POST /api/orders
// @access  Private
exports.addOrderItems = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;
    if (orderItems && orderItems.length === 0) {
        res.status(400);
        throw new Error('No order items');
        return;
    }
    else {
        const order = new orderModel_1.default({
            orderItems: orderItems.map((item) => (Object.assign(Object.assign({}, item), { product: item._id, _id: undefined }))),
            user: req.user.id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        });
        const createdOrder = yield order.save();
        res.status(201).json(createdOrder);
    }
}));
// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
exports.getMyOrders = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield orderModel_1.default.find({ user: req.user.id });
    res.status(200).json(orders);
}));
// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
exports.getOrderById = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield orderModel_1.default.findById(req.params.id).populate('user', 'name email');
    if (order) {
        res.status(200).json(order);
    }
    else {
        res.status(404);
        throw new Error('Order not found');
    }
}));
// @desc    Update order to paid
// @route   PUT /api/orders/:id/pay
// @access  Private
exports.updateOrderToPaid = (0, asyncHandler_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: "Update order to paid" });
}));
// @desc    Update order to delivered
// @route   PUT /api/orders/:id/deliver
// @access  Private/Admin 
exports.updateOrderToDelivered = (0, asyncHandler_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: "Update order to delivered" });
}));
// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
exports.getOrders = (0, asyncHandler_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: "Get all orders" });
}));
