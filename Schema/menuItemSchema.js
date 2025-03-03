const mongoose = require("mongoose") ;
const menu = new mongoose.Schema({
    DishName : {
        type : String , 
        required : true 
    } , 
    Cost : {
        type : Number , 
        required : true 
    }
})


const modelMenu = mongoose.model("menuModel" , menu )
module.exports = modelMenu ; 