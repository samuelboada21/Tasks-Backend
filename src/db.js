import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://samuelomarboba:MongoDB2121@cluster0.jm7bcn8.mongodb.net/?retryWrites=true&w=majority");
    console.log("DB is Connected");
  } catch (error) {
    console.log(error);
  }
};
