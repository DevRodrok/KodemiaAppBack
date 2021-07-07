
const koders = require('../models/koder')


function getByGeneration(num){
  const allKoders = koders.find({generation: num})
  return allKoders
}

function getById(id){
  return koders.findById(id)
}

function updateById(id, lastName, firstName, email, password, phone, picture){
  return koders.findByIdAndUpdate(id, {lastName, firstName, email, password, phone, picture })
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