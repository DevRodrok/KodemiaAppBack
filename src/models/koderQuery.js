const mongoose = require("mongoose")
const koders = require("./koders")

const schema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  }, 
  moduleName:{
    type: String,
    required: true,
  },
  generation:[{type: mongoose.Schema.Types.ObjectId, ref: koders}]
})


module.exports= mongoose.model("koderQuery", schema)