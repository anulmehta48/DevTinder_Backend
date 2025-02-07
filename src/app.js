const express = require("express");
const app = express();

app.get(
  "/user",
  (req, res,next) => {
    console.log("Handling the route user!!"); 
    next()
    res.send("Respone"); 
  },
  (req, res) => {
    console.log("Handling the route user 2!!");
    res.send("Respone 2");
  }
);

app.listen(7777, () => {
  console.log("server is running on port 7777");
});
