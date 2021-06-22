
const { urlencoded } = require("express")
const mongoose =  require("mongoose")
const koders = require("./koders")

const schema = new mongoose.Schema({
  info:{
    type: String,
    required: true
  }, 
  img:{
    type:urlencoded,
    //duda
  },
  generation: [{type: mongoose.Schema.Types.ObjectId, ref: koders}],
  date:{
    type:Date,
    required: true
  }, 
  
  //preguntar por los like's
})

module.exports=mongoose.model("advice", schema)