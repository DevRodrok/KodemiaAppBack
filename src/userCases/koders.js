
const koders = require('../models/koder')
const Generation = require('../models/generation')

const signUpKoders = require('./auth')
const {generation} = signUpKoders


async function getByGeneration(generationNumber){
  const findGen = await Generation.findOne({generationNumber})
  console.log(findGen)
  const kodersByGen = await koders.find({generation:findGen._id})
  console.log(kodersByGen)
  return kodersByGen
}




function getById(id){
  return koders.findById(id)
}

function updateById(id, newVal){
  return koders.findByIdAndUpdate(id, newVal)
}

function deleteById(id){
  return koders.findByIdAndDelete(id)
}


module.exports = {
  getByGeneration,
  getById, 
  updateById,
  deleteById
}