import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import waitlistRouter from './waitlist/waitlist.router.js';
import emailRouter from './email/email.router.js';
import path from 'path';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json());
app.use('/api/waitlist', waitlistRouter);
app.use('/api/email', emailRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    })
}

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port http://localhost:${PORT}`);
})
