const express=require("express");
const app=express();

app.use("/hello",(req,res)=>{
    res.send("Hello Hello Hello")
})

app.use("/test",(req,res)=>{
    res.send("Hello from the server !!!!!!!!")
})

app.listen(7777,()=>{
    console.log("server is running on port 7777");
    
})