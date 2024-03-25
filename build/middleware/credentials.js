"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credentials = void 0;
const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    res.header('Access-Control-Allow-Origin', origin);
    console.log('origin:', origin);
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
};
exports.credentials = credentials;
