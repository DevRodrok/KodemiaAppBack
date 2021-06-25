const { urlencoded } = require("express")
const mongoose = require("mongoose")

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
  //preguntar a Nao y Rose como se va a manejar esta parte
  //duda
  generation:{
    type: Object,
    required: true
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
  //quien modifica con useCases y route es admin
  isActive:{
    type: Boolean,
    required: true
  },
  //esto solo lo puede cambiar admin
  bootCamp:{
    type: String,
    required: true
  },
  phone:{
    type: Number,
    required: true
  },
  //checar con mentores
  picture:{
    type: String
  }
 
  
})

 

module.exports= mongoose.model("koders", schema)