import express from 'express';
const router = express.Router();
import { sendEmail } from './email.controller.js';

router.post('/', sendEmail);

export default router;