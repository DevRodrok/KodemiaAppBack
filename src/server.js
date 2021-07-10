
const express = require('express')
const cors = require('cors')
const kodersRouter = require('./routes/koders')
const adminsRouter = require('./routes/admins')

const auth = require('./routes/auth')
const adviceRouter = require('./routes/advice')
const server = express()

const {response} = require('express')

server.use(cors())
server.use(express.json())
server.use('/koders', kodersRouter)
server.use('/admins', adminsRouter)

server.use('/auth', auth)
server.use('/advice', adviceRouter)
server.use('/resources', resourcesRouter)



server.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'kodemiaAppAPI'
  })
})

module.exports = server