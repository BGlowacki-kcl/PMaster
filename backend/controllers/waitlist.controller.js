import mongoose from "mongoose";
import Waitlist from "../models/waitlist.model.js";

export const saveUser = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ success: false, message: "Please provide email" });
    }

    try {
        const existingUser = await Waitlist.findOne({ email });
        if(existingUser) {
            return res.status(400).json({ success: false, message: "User already signed up!" });
        }
        const newUser = new Waitlist({ email });
        await newUser.save();
        res.status(200).json({ success: true, data: newUser });
    } catch(error) {
        console.error("Error in save user to waitlist: ", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
    }
}