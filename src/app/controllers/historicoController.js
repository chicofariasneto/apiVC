// ### IMPORTS ###
const { pool } = require('../../database/index')

const express = require('express')

const router = express.Router()

const {

} = require()

// ### IMPORTS ###


router.post('/solicitar', async (request, response) => {
  try {
    const { idata, email } = request.body



  } catch (err) {
    console.log(err)
    return response.status(400).send({ error: 'Check logs' })
  }
})


module.exports = app => app.use('/historicos', router)
