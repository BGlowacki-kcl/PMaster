import express from "express";
import { saveUser } from "../controllers/waitlist.controller.js";

const router = express.Router();

router.post("/", saveUser);

export default router;