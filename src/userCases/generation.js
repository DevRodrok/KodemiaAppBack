
const { exec } = require('child_process')
const Generation = require('../models/generation')
const { validate } = require('../models/koder')
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
  await generation.find({status : stat}, (err, stat) => {
    (stat === true)
    ? generation.find({status : true})
    : generation.find({status : false})
  })
}

function updateById(id, newVal){
  return koders.findByIdAndUpdate(id, newVal)
}
function updateGenById(id, status){
  return generation.findByIdAndUpdate(id, status)
}



module.exports = {
  postGeneration,
  getByGeneration,
  getByBootCamp,
  updateGenById
}
