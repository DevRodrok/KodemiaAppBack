const advice = require("../models/advice");
const koders = require("../models/koder");
const jwt = require("jsonwebtoken");

function getAllByGeneration(generation) {
  return advice.find({
    generation: {
      bootcamp: generation.bootcamp,
      number: `${generation.number}`,
    },
  });
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

async function increaseLikes(_id, token) {
  const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);
  const { id } = decoded;
  let koderFound = await advice.find({ users: { $eq: `${id}` } });
  console.log(koderFound.length)
  if (koderFound.length !== 0) {
    throw new Error("Like duplicado");
  } else {
    return advice.findByIdAndUpdate(_id, {
      $inc: { likes: 1 },
      $push: { users: id },
    });
  }
}

module.exports = {
  getAllByGeneration,
  getLatest,
  getLastWeek,
  getLastMonth,
  getLastYear,
  postAdvice,
  increaseLikes,
};
