import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import waitlistRouter from './routes/waitlist.route.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use('/api/waitlist', waitlistRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
})

app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server is running on port http://localhost:${process.env.PORT}`);
})
