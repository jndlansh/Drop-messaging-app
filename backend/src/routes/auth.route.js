import express from 'express';
import { signup, login, logout, updateProfilePic } from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';
const router = express.Router();

// Example route for user registration
router.post ("/signup", signup);
router.post("/login", login)
router.post("/logout", logout)
router.put("/update-profile", protectRoute, updateProfilePic); // Assuming you have a function to handle profile picture updates


export default router;