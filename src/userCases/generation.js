

const generation = require('../models/generation')

function postGeneration(generationNumber, bootCamp, status){
  return generation.create({generationNumber, bootCamp, status})
}

function getByGeneration(gen){
  return generation.find({generationNumber : gen})
}

function getByBootCamp(bCamp){
  return generation.find({bootCamp : bCamp})
}

async function getByStatus(stat){
  return await generation.find({status : stat})
}

function updateGenById(id, status){
  return generation.findByIdAndUpdate(id, status)
}

module.exports = {
  postGeneration,
  getByGeneration,
  getByBootCamp,
  updateGenById,
  getByStatus
}
