
const express = require('express')
const auth = require('../userCases/auth')
const authMiddleware = require('../middlewares/auth')
const { response } = require('express')

const router = express.Router()
//se debe de borrar
router.get('/', async(req, res) =>{
  // const allKoders = await koders.getAll()
  console.log("ruta raiz")
  
  res.json({
    success: true,
    data: allKoders
  })
})

router.post('/koders/signIn', async (req, res)=>{

  try {
    const {lastName, firstName, generation, email, password, isActive, bootcamp, phone, picture} = req.body
    const koderCreated = await auth.signUpKoders(lastName, firstName, generation, email, password, isActive, bootcamp, phone, picture)

    res.json({
      success: true,
      data: koderCreated
    })
  } catch(error){
    res.status(401)
    res.json({
      success: false,
      message: error.message
    })
  }
})

router.post('/koder/login', async(req, res)=>{
  try{
    const {email, password} = req.body
    const token = await auth.loginKoders(email, password)

    res.json({
      success: true,
      message: ('Koder logged'),
      data:{
        token: token,
        email: email
      }
    })
  } catch(error){
    res.status(401)
    res.json({
      success: false,
      message: error.message
    })
  }
})

router.post('/admin/signIn', async (req, res) => {

try {
  const {lastName, firstName, email, password, phone, picture} = req.body
  const adminCreated = await auth.signUpAdmins(lastName, firstName, email, password, phone, picture )

  res.json({
    success: true,
    data: adminCreated
  })
} catch(error) {
  res.status(401)
  res.json({
    success: false,
    message: error.message
  })
}

})

router.post('/admin/login', async(req, res) => {
  try {
    const {email, password} = req.body
    const token = await auth.loginAdmins(email, password)

    res.json({
      success: true,
      message: ('Admin logged'),
      data: {
        token: token,
        email: email
      }
    })
  } catch(error){
    res.status(401)
    res.json({
      success: false, 
      message: error.message
    })
  }
})

module.exports = router