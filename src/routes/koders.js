
const {request, response} = require('express')
const express = require('express')
const koders = require('../userCases/koders')
const authMiddleware = require('../middlewares/auth')


const router = express.Router()

router.get('/', async(req, res) =>{
  // const allKoders = await koders.getAll()
  console.log("ruta raiz")
  
  res.json({
    success: true,
    data: allKoders
  })
})

router.patch('/:id', authMiddleware, async (req, res) => {
  const id = req.params.id
  const {lastName, firstName, email, password, phone, picture} = req.body

  const koderUpdated = await koders.updateById(id, lastName, firstName, email, password, phone, picture)

  res.json({
    success: true,
    data: koderUpdated
  })
})

router.delete('/:id', authMiddleware, async (req, res) => {
  const koderDeleted = await koders.deleteById(req.params.id)

  response.json({
    success: true,
    data: koderDeleted
  })

})

module.exports = router