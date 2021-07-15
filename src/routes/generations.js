
const express = require('express')
const Generation = require('../userCases/generation')
const authMiddleware = require('../middlewares/auth')
const router = express.Router()


router.post('/newGen', async (req, res) => {
  try{
    const {generationNumber, bootCamp, status} = req.body
    const newGeneration = await generation.postGeneration(generationNumber, bootCamp, status)
    res.json({
      succes: true,
      data: newGeneration
    })
  } catch (error){
    res.status(401)
    res.json({
      success: false,
      message: error.message
    })
  }
})

router.get('/byGenerations', async (req, res) => {
  const {generationNumber} = req.body
  const allGenerations = await generation.getByGeneration(generationNumber)
  res.json({
    success: true,
    data: allGenerations
  })
})

router.get('/byBootCamp', async (req, res) => {
  const {bootCamp} = req.body
  const allBootCamps = await generation.getByBootCamp(bootCamp)
  res.json({
    succes: true,
    data: allBootCamps
  })
})

router.get('/byStatus', async (req, res) => {
  const {status} = req.body
  const allGenActive = await generation.getByStatus(status)
  res.json({
    success: true,
    data: allGenActive
  })
})


router.patch('/changeStatus', async (req, res) => {
  const id = req.params.id
  const newStatus = req.body
  
 const generationUpdated = await generation.updateGenById(id, newStatus )
  res.json({
    success: true,
   data: generationUpdated
  })
})

module.exports = router