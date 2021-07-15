
const admins = require('../models/admin')
const koders = require('../models/koder')


 function getByGeneration(num){
   const allKoders = koders.find({generation: num})
   return allKoders
 }


function getById(id) {
  return admins.findById(id)
}

function updateById(id, lastName, firstName, email, password, phone, picture){
  return admins.findByIdAndUpdate(id, {lastName, firstName, email, password, phone, picture})
}





function deleteById(id){
  return admins.findByIdAndDelete(id)
}


module.exports = {
  getByGeneration,
  getById,
  updateById,
  deleteById
}