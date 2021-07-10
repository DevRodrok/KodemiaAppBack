const express = require('express')
const resources = require('../userCases/Resources')

const router = express.Router()

router.get('/', async(req, res) => {
  const allResources = await resources.getByModule(req.body)
  res.json({
    success: true,
    data: allResources
  })
})

router.post('/', async(req, res) => {
    try {
        const {moduleName, resources} = req.body
        res.json({
            success: true,
            data: newResource
        })
    } catch (error) {
        res.status(401)
        res.json({
            success: false,
            message: error.message
        })
        
    }
    
})

module.exports = router