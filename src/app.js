const express=require("express");
const app=express();
 
app.get("/user",(req,res)=>{
    res.send({"fisrtname":"Anul","Lastname":"Mehta"})
})
app.post("/user",(req,res)=>{
    res.send("Data Successfully saved to the Database")
})
app.use("/",(req,res)=>{
    res.send("Hello Hello Hello!!!")
})

app.listen(7777,()=>{
    console.log("server is running on port 7777");
    
})
