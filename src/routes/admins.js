
const express = require('express')
const admins = require('../userCases/admins')
const authMiddleware = require('../middlewares/auth')
const auth = require('../userCases/auth')

const router = express.Router()

router.get('/', async(req, res) => {
  const allAdmins = await admins.getAll()
  res.json({
    success: true,
    data: allAdmins
  })
})

router.post('/signUp', async (req, res) => {

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

   router.post('/login', async(req, res) => {
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

router.get('/:id', async (req,res) => {
  const token = req.get('Authorization')
  try{
    const userType = await auth.getUserType(token)
    res.json({
      success: true,
      data: userType
    })
  }catch(error){
    res.status(401)
    res.json({
      success:true,
      message:error.message
    })
  }

})

router.patch('/:id', authMiddleware, async (req, res) => {
  const id = req.params.id
  const {lastName, firstName, email, password, phone, picture} = req.body

  const adminUpdate = await admins.updateById(id, lastName, firstName, email, password, phone,picture)
  
  res.json({
    success: true,
    data: adminUpdate
  })
})

//accion para borrar koders y modificar estado activo o inactivo




module.exports = router