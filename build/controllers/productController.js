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
exports.getTopProducts = exports.getProductById = exports.getProducts = void 0;
const asyncHandler_1 = __importDefault(require("../middleware/asyncHandler"));
const productModel_1 = __importDefault(require("../models/productModel"));
// @desc    Fetch all products
// @route   GET /api/products   
// @access  Public 
const getProducts = (0, asyncHandler_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield productModel_1.default.find({});
    res.json(products);
}));
exports.getProducts = getProducts;
// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield productModel_1.default.findById(req.params.id);
    if (product) {
        return res.json(product);
    }
    throw new Error('Product not found');
}));
exports.getProductById = getProductById;
// @desc    Get Top Rated Products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = (0, asyncHandler_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield productModel_1.default.find({}).sort({ rating: -1 }).limit(5);
    res.status(200).json(products);
}));
exports.getTopProducts = getTopProducts;
