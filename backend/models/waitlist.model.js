import mongoose from "mongoose";

const waitlistSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true, // createdAt, updatedAt
	}
);

const Waitlist = mongoose.model("Waitlist", waitlistSchema);

export default Waitlist;