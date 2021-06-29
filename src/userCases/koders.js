
const koders = require('../models/koder')


function getAll(){
  const allKoders = koders.find()
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
  getAll,
  getById, 
  updateById,
  deleteById
}