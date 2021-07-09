
const admins = require('../models/admin')

function getAll(){
  const allAdmins = admins.find.apply()
  return allAdmins
}

function getById(id) {
  return admins.findById(id)
}

function updateById(id, lastName, firstName, email, password, phone, picture){
  return admins.findByIdAndUpdate(id, {lastName, firstName, email, password, phone, picture})
}


//duda para eliminar o activar y desactivar koders
function deleteById(id){
  return admins.findByIdAndDelete(id)
}


module.exports = {
  getAll,
  getById,
  updateById,
  deleteById
}