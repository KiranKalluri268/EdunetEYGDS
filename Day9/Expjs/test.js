const express=require("express")
const MongoClient=require("mongoose");
const dotenv=require("dotenv");
const app=express();

dotenv.config();
const PORT=process.env.PORT || 8268;

MongoClient.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB Atlas Cloud connected successfully")
})
.catch((err)=>{
    console.log(err)
})

app.listen(PORT,()=>{
    console.log(`My port is running on ${PORT} number`)
})