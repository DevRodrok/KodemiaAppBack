
const {request, response} = require('express')
const express = require('express')
const koders = require('../userCases/koders')
const authMiddleware = require('../middlewares/auth')
const auth = require('../userCases/auth')


const router = express.Router()

router.get('/', async(req, res) =>{
 const {generation} = req.body
 const filterByGeneration = await koders.getByGeneration(generation)
 
  
  res.json({
    success: true,
    data: filterByGeneration
  })
})

router.post('/signUp', async (req, res) => {
  
  try {
    const {lastName, firstName, generation, gitHub, email, password, isActive, phone, picture} = req.body
    const koderCreated = await auth.signUpKoders(lastName, firstName, generation, gitHub, email, password, isActive, phone, picture)
   
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

router.post('/login', async(req, res)=>{
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

router.post('/byGeneration', async (req, res) => {
  console.log(req.body)
  const filterByGeneration = await koders.getByGeneration(req.body.generationNumber)
  res.json({
    success: true,
    data: filterByGeneration
  })
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

  const koderUpdated = await koders.updateById(id, req.body)

  res.json({
    success: true,
    data: koderUpdated
  })
})

router.delete('/:id', authMiddleware, async (req, res) => {
  const koderDeleted = await koders.deleteById(req.params.id)

  res.json({
    success: true,
    data: koderDeleted
  })

})

module.exports = router