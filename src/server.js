
const express = require('express')
const cors = require('cors')
const kodersRouter = require('./routes/koders')
const adminsRouter = require('./routes/admins')
const server = express()

const {response} = require('express')

server.use(cors())
server.use(express.json())
server.use('/koders', kodersRouter)
server.use('/admins', adminsRouter)




server.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'kodemiaAppAPI'
  })
})

module.exports = server