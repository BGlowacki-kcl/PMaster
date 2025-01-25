import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send('Server is ready');
})

app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server is running on port http://localhost:${process.env.PORT}`);
})
