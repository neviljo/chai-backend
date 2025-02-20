import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit: "16kb"}));//json accept karna and json ki limit set karna
app.use(express.urlencoded({extended: true}));//urlencoded data accept karna
app.use(express.static("public"));//public folder ko static folder me convert kar dena
app.use(cookieParser());//secure cookies ke liye

//routes import
import userRouter from "./routes/user.routes.js"

//routes declaration
app.use("/api/v1/users", userRouter)

export { app };