import jwt from 'jsonwebtoken'
import { type Response } from 'express'

const generateToken = (res: Response, userId: string) => {
    const token = jwt.sign(
            {userId}, 
            process.env.JWT_SECRET || 'julius', 
            {expiresIn: '8h'}
    )

    res.cookie(
        'jwt', 
        token, 
        {
            httpOnly: true, 
            maxAge: 8 * 60 * 60 * 1000, 
            secure: process.env.NODE_ENV !== 'development' , 
            sameSite: 'none'
        })    
}

export default generateToken