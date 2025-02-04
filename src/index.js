import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
    path:'./env'
});

connectDB()
.then(()=>{
    app.listen(process.env.port||8000,()=>{
        console.log(`Server is running on port ${process.env.port||8000}`);
    })
})
.catch((err)=>{
    console.log("MONGODB connection failed!!! ",err);
    
})






/*
import express from "express";
const app = express(); 
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR: ",error);
            throw error
        })

        
    } catch (error) {
        console.log("ERROR: ",error)
        throw error
        
    }

})() */
