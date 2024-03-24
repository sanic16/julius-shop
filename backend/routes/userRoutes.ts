import { Router } from "express";
import {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUserById
} from '../controllers/userController'
import { protect, admin } from "../middleware/authMiddlware";

const router = Router()

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', loginUser)
router.get('/logout', protect, logoutUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.route('/:id').get(protect, admin, getUserById)
.put(protect, admin, updateUserById)
.delete(protect, admin, deleteUser)

export default router

