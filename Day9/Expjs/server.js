const express=require('express');
const app=express();

app.get("/getUser",(req,res)=>{
  res.send("Welcome to getUser endpoint");
})

app.listen(5500,()=>{
    console.log("My server is on port 5500");
})