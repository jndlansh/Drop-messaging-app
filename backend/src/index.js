import express from 'express';
import dotenv from 'dotenv';
import cookiePaser from 'cookie-parser';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import { connectDB } from './lib/db.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookiePaser());

const PORT = process.env.PORT || 5001;

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
    console.log('Server is running on PORT:'+ PORT);
    connectDB();
})