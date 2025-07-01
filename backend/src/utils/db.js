import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected!");
  } catch (error) {
    console.log("Error in connecting db:", error);
    process.exit(1);
  }
}
