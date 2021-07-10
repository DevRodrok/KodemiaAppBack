const mongoose =  require("mongoose")
const koders = require("./koder")

const schema = new mongoose.Schema({
  info:{
    type: String,
  }, 
  img:{
    type:String,
   },
  date:{
    type:Date,
    default: Date.now,
  }, 
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: koders}],
  likes: {
    type: Number

  },
  createdAt:{
    type: Date,
    default: Date.now,
    expires: '1w'
  }
  
  

})

module.exports=mongoose.model("advice", schema)