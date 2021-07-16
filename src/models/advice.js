const mongoose =  require("mongoose")

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
  likes: {
    type: Number,
    default: 0
  },
  createdAt:{
    type: Date,
    default: Date.now,
    expires: '1w'
  },
  generation:{
    bootcamp:{
      type:String,
    },
    number:{
      type: Number,
    },
  },
  users:[String]
})

module.exports=mongoose.model("advice", schema)