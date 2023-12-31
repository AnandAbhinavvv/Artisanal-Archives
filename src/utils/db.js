import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected!");
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
