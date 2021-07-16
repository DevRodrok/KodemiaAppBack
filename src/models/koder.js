
const mongoose = require("mongoose")
const Generation = require('./generation')
const {Schema} = mongoose
const {Types} = Schema

const schema = new mongoose.Schema({
  lastName:{
    type: String,
    required: true,
    trim: true
  },
  firstName:{
    type: String,
    required: true,
    trim: true
  }, 
  generation:{
    type: Types.ObjectId,
    ref: 'Generation'
  },
  gitHub: {
    type: String,
  },
  email:{
    type:String,
    pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    minlength: 5,
    maxlength: 50,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true
  },
  isActive:{
    type: Boolean,
    required: false
  },
  phone:{
    type: Number,
    required: true
  },
  picture:{
    type: String
  }
})

module.exports= mongoose.model('koders', schema)