
const mongoose =  require("mongoose")
const koders = require("./koders")

const schema = new mongoose.Schema({
  info:{
    type: String,
    required: true
  }, 
  img:{
    type:String,
   },
  date:{
    type:Date,
    required: true
  }, 
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: koder}],
  likes: {
    type: Number

  }
  
  

})

module.exports=mongoose.model("advice", schema)