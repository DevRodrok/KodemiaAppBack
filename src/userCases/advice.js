
const advice = require('../models/advice')


function getAllByGeneration(language, generationNumber){
return advice.find({generation:{bootcamp:language,number:generationNumber}})
}

function getLatest(){
  return advice.find().sort({createdAt: 'desc'})
}

function getLastWeek(){
  return advice.find({createdAt: { $lte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000)}}).sort({date: 'desc'})
}

function getLastMonth(){
  return advice.find({createdAt: {$lte: new Date(new Date() - 4 * 7 * 60 * 60 * 24 * 1000)}}).sort({date: 'desc'})
}

function getLastYear(){
  return advice.find({createdAt: {$lte: new Date(new Date() - 12 * 4 * 7 * 60 * 60 * 24 * 1000)}}).sort({date: 'desc'})
}

function postAdvice(info, img, comments){
  return advice.create({info, img, comments})
}


module.exports = {
  getAllByGeneration,
  getLatest,
  getLastWeek,
  getLastMonth,
  getLastYear,
  postAdvice
}