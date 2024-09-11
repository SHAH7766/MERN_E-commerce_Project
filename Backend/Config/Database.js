import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
dotenv.config();
const Mongourl = process.env.MongoURL;
export const DBconnection = async () => {
  try {
    const res = await mongoose.connect(Mongourl);
    console.log(
      `Database connection established at ${res.connection.host}`.bgMagenta
    );
  } catch (error) {
    console.log("Error connecting to Mongoose".bgRed);
  }
};
