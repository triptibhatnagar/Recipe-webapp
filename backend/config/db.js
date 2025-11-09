import mongoose from "mongoose"

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("SUCCESS SUCCESS SUCCESS!! MongoDB connected successfully");
    } catch (error) {
        console.error("FAIL FAIL FAIL!! MongoDB connection failed:", error.message);
        process.exit(1); // Stop server if connection fails
    }
}

export default connectDB;