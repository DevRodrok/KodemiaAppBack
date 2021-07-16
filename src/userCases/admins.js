
const admins = require('../models/admin')

function getById(id) {
  return admins.findById(id)
}

function updateById(id, newVal){
  return admins.findByIdAndUpdate(id, newVal)
}

function deleteById(id){
  return admins.findByIdAndDelete(id)
}


module.exports = {
  getById,
  updateById,
  deleteById
}