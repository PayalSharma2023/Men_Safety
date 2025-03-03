import mongoose from "mongoose";

export const DbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};
