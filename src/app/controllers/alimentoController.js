// ### IMPORTS ###
const express = require('express')

const { pool } = require('../../database/index')

//const authMiddleware = require('../middlewares/auth')

const {
    buscarAlimentos,
} = require('../logic/alimentoLogic')

const router = express.Router()
// ### IMPORTS ###

router.get('/', async (request, response) => {
    try {
        const { nomes } = request.body
        
        var alimentos = []

        for (const i of nomes) {
            const { nome } = i
            resultAlimento = await buscarAlimentos(nome.toLowerCase())

            for (const j of resultAlimento)
                alimentos.push(j)
        }

        return response.status(200).send({ alimentos })
    } catch (err) {
        console.log(err)
        return response.status(400).send({ error: 'It not works!' })
    }
})

module.exports = app => app.use('/alimentos', router)