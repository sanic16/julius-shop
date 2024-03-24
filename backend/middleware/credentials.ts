import { type Request, type Response, type NextFunction } from "express"

export const credentials = (req: Request, res: Response, next: NextFunction ) => {
    const origin = req.headers.origin
    res.header('Access-Control-Allow-Origin', origin)
    console.log('origin:', origin)
    res.header('Access-Control-Allow-Credentials', 'true')
    next()
}