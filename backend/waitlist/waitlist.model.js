import mongoose from "mongoose";

const waitlistSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
		},
		newsletter: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true, // createdAt, updatedAt
	}
);

const Waitlist = mongoose.model("Waitlist", waitlistSchema);

export default Waitlist;