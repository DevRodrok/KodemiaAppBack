const advice = require("../models/advice");

function getAllByGeneration(generation) {
  return advice.find({"generation":{
    "bootcamp":generation.bootcamp,
    "number":`${generation.number}`
  }});
}

function getLatest() {
  return advice.find().sort({ createdAt: "desc" });
}

function getLastWeek() {
  return advice
    .find({
      createdAt: { $lte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000) },
    })
    .sort({ date: "desc" });
}

function getLastMonth() {
  return advice
    .find({
      createdAt: { $lte: new Date(new Date() - 4 * 7 * 60 * 60 * 24 * 1000) },
    })
    .sort({ date: "desc" });
}

function getLastYear() {
  return advice
    .find({
      createdAt: {
        $lte: new Date(new Date() - 12 * 4 * 7 * 60 * 60 * 24 * 1000),
      },
    })
    .sort({ date: "desc" });
}

function postAdvice(info, title, img, generation) {
  return advice.create({ info, title, img, generation });
}

function increaseLikes(id){
  return advice.findByIdAndUpdate(id,{$inc:{likes:1}})
}

module.exports = {
  getAllByGeneration,
  getLatest,
  getLastWeek,
  getLastMonth,
  getLastYear,
  postAdvice,
  increaseLikes
};
