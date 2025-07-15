import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";

dotenv.config({});

const app= express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:5173/",
  credentials: true,
};

//API routes
app.use("/api/v1/user",userRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server is running at ${PORT}`)
})