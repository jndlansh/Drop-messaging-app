import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookiePaser from 'cookie-parser';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import { connectDB } from './lib/db.js';
import {app, server} from "./lib/socket.js"

dotenv.config();
const PORT = process.env.PORT || 5001;

//const app = express();


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookiePaser());


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
    console.log('Server is running on PORT:'+ PORT);
    connectDB();
})