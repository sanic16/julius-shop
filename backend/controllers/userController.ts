import asyncHandler from "../middleware/asyncHandler";
import User from "../models/userModel";
import generateToken from "../utils/generateToken";
import { type Request, type Response } from 'express'

// @desc    Login user & get token
// @route   POST /api/users/login
// @access  Public
export const loginUser = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body
    
    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password))){
        generateToken(res, user._id)
        return res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    }else{
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

// @desc    Register a new user
// @route   POST /api/users/
// @access  Public
export const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    const userExists = await User.findOne({email})
    
    if(userExists){
        res.status(400)
        throw new Error('El usuario ya existe')
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if(user){
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    }else{
        res.status(400)
        throw new Error('Datos de usuario inválidos')
    }
})

// @desc    Logout user / clear cookie
// @route   GET /api/users/logout
// @access  Private
export const logoutUser = asyncHandler(async (_req, res) => {
    res.cookie('jwt', '', {httpOnly: true, expires: new Date(0), secure: process.env.NODE_ENV !== 'development', sameSite: 'none'})
    return res.status(200).json({
        message: 'Sesión cerrada'
    })
})

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
export const getUserProfile = asyncHandler(async (req: Request, res: Response ) => {

    const user = await User.findById(req.user.id)
    if(user){
        return res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    }else{
        res.status(404)
        throw new Error('Usuario no encontrado')
    }
   
})  

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
export const updateUserProfile = asyncHandler(async (req: Request, res: Response) => {
    const user = await User.findById(req.user.id)
    if(user){
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email

        if(req.body.password){
            user.password = req.body.password
        }

        const updatedUser = await user.save()

        return res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin
        })
    }else{
        res.status(404)
        throw new Error('Usuario no encontrado')    
    }
})

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
export const getUsers = asyncHandler(async (_req, res) => {
    return res.json({ message: 'Get all users'})
})

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
export const deleteUser = asyncHandler(async (req, res) => {
    return res.json({ message: `Delete user ${req.params.id}`})
}) 

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
export const getUserById = asyncHandler(async (req, res) => {
    return res.json({ message: `Get user ${req.params.id}`})
})

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
export const updateUserById = asyncHandler(async (req, res) => {
    return res.json({ message: `Update user ${req.params.id}`})
})