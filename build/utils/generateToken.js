"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (res, userId) => {
    const token = jsonwebtoken_1.default.sign({ userId }, process.env.JWT_SECRET || 'julius', { expiresIn: '8h' });
    res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 8 * 60 * 60 * 1000,
        secure: true,
        sameSite: 'none',
    });
};
exports.default = generateToken;
