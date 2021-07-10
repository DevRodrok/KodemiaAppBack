
const koders = require('../models/koder')


function getByGeneration(num){
  const allKoders = koders.find({generation: num})
  return allKoders
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