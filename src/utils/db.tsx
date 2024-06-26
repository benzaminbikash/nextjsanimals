import mongoose from "mongoose";

async function DatabaseConnection(): Promise<void> {
  try {
    await mongoose.connect(process.env.MONGODBURL);
    console.log("Database connection successfully!");
  } catch (error) {
    console.log(error);
  }
}

export default DatabaseConnection;
