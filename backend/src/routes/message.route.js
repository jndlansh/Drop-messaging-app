import express from 'express';
import { protectRoute } from '../middleware/auth.middleware';
import { getUsersForSidebar, getMessages } from '../controllers/message.controller.js';
import { send } from 'vite';
const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.get(":/id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

export default router;