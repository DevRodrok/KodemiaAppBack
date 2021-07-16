
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
generationNumber: {
  type: Number,
  required: true
}, 
bootCamp: {
type: String,
required: true
},
status:{
  type: Boolean
}
})

module.exports= mongoose.model('generation', schema)