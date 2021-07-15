const express = require('express')
const cors = require('cors')
const kodersRouter = require('./routes/koders')
const adminsRouter = require('./routes/admins')
const resourcesRouter = require('./routes/resources')
const adviceRouter = require('./routes/advice')
const generationRouter =require('./routes/generations')

const server = express()

const {response} = require('express')

server.use(cors())
server.use(express.json())
server.use('/koders', kodersRouter)
server.use('/admins', adminsRouter)
server.use('/advice', adviceRouter)
server.use('/resources', resourcesRouter)
server.use('/generation', generationRouter)



server.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'kodemiaAppAPI'
  })
})

module.exports = server