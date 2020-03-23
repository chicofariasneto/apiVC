// ### IMPORTS ###
const { pool } = require('../../database/index')

const express = require('express')

const router = express.Router()

const {
  historicoIdata
} = require('../logic/refeicaoLogic')

// ### IMPORTS ###

// A rota retorna o historico de refeicao do dia
router.post('/solicitar', async (request, response) => {
  try {
    const { email, idata } = request.body
    const resultado = await historicoIdata(email, idata)

    return response.status(200).send({ resultado })

  } catch (err) {
    console.log(err)
    return response.status(400).send({ error: 'Check logs' })
  }
})


module.exports = app => app.use('/historicos', router)