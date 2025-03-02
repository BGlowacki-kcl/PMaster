import express from "express";
import { saveUser } from "./waitlist.controller.js";

const router = express.Router();

router.post("/", saveUser);

export default router;