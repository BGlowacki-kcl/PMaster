import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import waitlistRouter from './waitlist/waitlist.router.js';
import emailRouter from './email/email.router.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/waitlist', waitlistRouter);
app.use('/api/email', emailRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
})

app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server is running on port http://localhost:${process.env.PORT}`);
})
