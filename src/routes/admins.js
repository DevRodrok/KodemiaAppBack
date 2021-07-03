
const express = require('express')
const admins = require('../userCases/admins')
const authMiddleware = require('../middlewares/auth')

const router = express.Router()

router.get('/', async(req, res) => {
  const allAdmins = await admins.getAll()
  res.json({
    success: true,
    data: allAdmins
  })
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