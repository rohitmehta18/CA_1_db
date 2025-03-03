const express = require("express") ;
const mongoose = require("mongoose") ;

require("dotenv").config();

const restaurent = require("./Schema/restaurentSchema")
const menu = require("./Schema/menuItemSchema")
const app = express() ;

app.use(express.json()) ;
const PORT = 9090 ;

app.listen(PORT , ()=>{
    console.log(`Server is running at ${PORT}`)
})