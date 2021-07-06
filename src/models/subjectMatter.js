const mongoose = require("mongoose")
const koders = require("./koder")

const schema =  new mongoose.Schema({
  moduleName:{
    type:String,
    required: true
  },
  resources: {
    type:String,
    required: true
  }
})

module.exports=mongoose.model("subjectMatter", schema)