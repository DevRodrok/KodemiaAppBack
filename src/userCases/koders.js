
const koders = require('../models/koder')
const Generation = require('../models/generation')

async function getByGeneration(generationNumber){
  const findGen = await Generation.findOne({generationNumber})
  const kodersByGen = await koders.find({generation:findGen._id})
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