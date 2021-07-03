
const advice = require('../models/advice')


function getAll(){
return advice.find()
}

function getLatest(){
  return advice.find().sort({date: 'desc'})
}

function getLastWeek(){
  return advice.find({date: { $gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000)}}).sort({date: 'desc'})
}

function getLastMonth(){
  return advice.find({date: {$gte: new Date(new Date() - 30 * 7 * 60 * 60 * 24 * 1000)}}).sort({date: 'desc'})
}

function getLastYear(){
  return advice.find({date: {$gte: new Date(new Date() - 12 * 30 * 7 * 60 * 60 * 24 * 1000)}}).sort({date: 'desc'})
}

function postAdvice(info, img, date, comments){
  return advice.create(info, img, date, comments)
}


module.exports = {
  getAll,
  getLatest,
  getLastWeek,
  getLastMonth,
  getLastYear,
  postAdvice
}