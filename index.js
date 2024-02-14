import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import config from "./config/config.js";
import authRouter from "./routers/auth.route.js";
import listingRouter from "./routers/listing.route.js";
import errorHandler from "./middleware/utils/errorHandler.js"

dotenv.config();
const app = express();

//body parser
app.use(express.json());

/// i had a problem when connecting to mongodb through mongoose the problem was it was not async ans await
const connectDB = async () => {
  await mongoose.connect(config.dbconnection).then(() => {
    console.log("Connected to MongoDB");
  });
};
connectDB();

//lisitng to the port
app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`);
});

//calling the routes
// app.use(errorHandler)
app.use("/api/auth", authRouter);
app.use("/api/listings", listingRouter);










// Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
