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

        // Ordena os alimentos
        alimentos.sort(function(element1, element2) {
            if (element1.nome > element2.nome) return 1
            if (element1.nome < element2.nome) return -1
            return 0
        })

        return response.status(200).send({ alimentos })
    } catch (err) {
        console.log(err)
        return response.status(400).send({ error: "Check logs" })
    }
})

module.exports = app => app.use('/alimentos', router)