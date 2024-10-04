import mongoose from "mongoose";

const url = process.env.MONGO_URI;

export const ConnectDB = async () => {
  try {
    await mongoose.connect(url);
  } catch (error) {
    console.log("Error: " + error);
  }
};
