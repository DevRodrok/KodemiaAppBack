const mongoose = require("mongoose")

const schema = new mongoose.Schema({
 lastName:{
   type: String,
   required: true,
   trim: true
 },
 firstName: {
   type: String,
   required: true,
   trim: true
 }, 
 email:{
   type: String,
   pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
   minlength: 5,
   maxlength: 50,
   required: true
 },
 password: {
   type: String,
   required: true
 }, 
 phone:{
   type: Number,
   required: true,

 },
 picture: {
   type: String,
   required: true
 }

 

})

 

module.exports= mongoose.model("admins", schema)