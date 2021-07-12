const mongoose =  require("mongoose")
const koders = require("./koder")

const schema = new mongoose.Schema({
  info:{
    type: String,
    required: true
  }, 
  title:{
    type: String,
    required:true
  },
  img:{
    type:String,
   },
  // comments: [{type: mongoose.Schema.Types.ObjectId, ref: koders}],
  // likes: {
  //   type: Number
  // },
  createdAt:{
    type: Date,
    default: Date.now,
    expires: '1w'
  },
  generation:{
    type:Object,
    bootcamp:{
      type:String,
    },
    number:{
      type: Number,
    },
    required:true
  }
  
  

})

module.exports=mongoose.model("advice", schema)