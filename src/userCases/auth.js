
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const koders = require('../models/koder')
const admins = require('../models/admin')


async function signUpKoders (lasName, firstName, generation, email, password, isActive, bootcamp, phone){
  const passwordEncripted = await bcrypt.hash(password, 10)
  return koders.create({lasName, firstName, generation, email, password: passwordEncripted, isActive, bootcamp, phone})
}

async function signUpAdmins (lastName, firstName, email, password, phone){
  const passwordEncripted = await bcrypt.hash(password, 10)
  return admins.create({lastName, firstName, email, password: passwordEncripted, phone })
}

async function loginKoders(email, password){
  const userFound = await koders.findOne({email})
  if (!userFound) throw new Error('El usuario o contraseña no coincide')

  const isPasswordValid = await bcrypt.compare(password, userFound.password)

  if(!isPasswordValid) throw new Error ('El usuario o contraseña no coiciden')

  const token = jwt.sign({id: userFound._id}, process.env.JWT_SECRET)

  return token
}

async function loginAdmins (email, password){
  const adminFound = admins.findOne({email})

  if(!adminFound) throw new Error('El usuario o contraseña no coinciden')

  const isPasswordValid = await bcrypt.compare(password, adminFound.password)

  if(!isPasswordValid) throw new Error('El usuario o contraseña no coinciden')

  const token = jwt.sign({id: adminFound._id}, process.env.JWT_SECRET)

  return token
}

module.exports = {
  signUpKoders,
  signUpAdmins,
  loginKoders,
  loginAdmins
}