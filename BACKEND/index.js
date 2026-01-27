const express = require("express");
const app=express();
require('dotenv').config();
require('./models/db');
const AuthRoute=require('./routes/AuthRoute')

const cors=require('cors')
const bodyParser=require('body-parser');
const PORT=process.env.PORT || 8080;
app.get("/",(req,res)=>{
 res.send("pong")
})

app.use(bodyParser.json())
app.use(cors())

app.use("/auth",AuthRoute)
app.listen(PORT,()=>{
  console.log(`SERVER RUNNING ON PORT ${PORT}`)
})