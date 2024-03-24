import jwt from 'jsonwebtoken'
import asyncHandler from './asyncHandler'
import User from '../models/userModel'
import { type Request, type Response, type NextFunction } from 'express'


// @desc    Protect routes
export const protect = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    let token
    
    // Check if token is in the header
    token = req.cookies.jwt
    if(token){
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET || 'julius')  as {userId: string, isAdmin?: boolean}
            req.user = await User.findById(decoded.userId).select('-password')
            return next()
        } catch (error) {
            console.error(error)
            throw new Error('No autorizado, token no válido o expirado')
        }
    }else{
        res.status(401)
        throw new Error('No autorizado, no hay token')
    }
})

// @desc    Admin middleware
export const admin = (req: Request, res: Response, next: NextFunction) => {
    if(req.user && req.user.isAdmin){
        next()
    }else{
        res.status(401)
        throw new Error('No autorizado como administrador')
    }
}