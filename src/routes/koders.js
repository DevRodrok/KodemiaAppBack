
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
    const {lastName, firstName, generation, gitHub, email, password, isActive, bootCamp, phone, picture} = req.body
    const koderCreated = await auth.signUpKoders(lastName, firstName, generation, gitHub, email, password, isActive, bootCamp, phone, picture)
   console.log(req.body)
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
 


router.patch('/:id', authMiddleware, async (req, res) => {
  const id = req.params.id
  const {lastName, firstName, gitHub, email, password, phone, picture} = req.body

  const koderUpdated = await koders.updateById(id, lastName, firstName, gitHub, email, password, phone, picture)

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