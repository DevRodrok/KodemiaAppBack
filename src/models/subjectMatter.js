const mongoose = require("mongoose")
const koders = require("./koders")

const schema =  new mongoose.Schema({
  moduleName:{
    type:String,
    required: true
  },
  resources: {
    type:String
  }
  
})

module.exports=mongoose.model("subjectMatter", schema)