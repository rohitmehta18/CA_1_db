const mongoose = require("mongoose") ;
const restaurent = new mongoose.Schema({
    Name : {
        type : String , 
        required : true 
    } ,
    Location : {
        type : String , 
        required : true 
    } ,
    menuItem : {
        type : [String]
    }

})

const model = mongoose.model("restaurentModel" , restaurent )
module.exports = model ; 