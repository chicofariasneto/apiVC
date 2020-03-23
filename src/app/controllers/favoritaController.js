const express = require('express')

const { pool } = require('../../database')

const {
    insertFavorita
} = require('../models/favoritaModel')

const {
    listarFavoritas,
    isFavorita
} = require('../logic/favoritaLogic')

const {
    isTherePessoa
} = require('../logic/pessoaLogic')

const router = express.Router()

// A rota marca uma refeicao como favorita
router.post('/inserir', async (request, response) => {
    try {
        const { email, id_refeicao } = request.body

        const existePessoa = await isTherePessoa(email)
        if (!existePessoa)
            return response.status(400).send({ error: "Email not found"})

        const existeRefeicao = await isFavorita(email, id_refeicao)
        if (existeRefeicao)
        return response.status(400).send({ error: "Already favorited"})

        await pool.query(insertFavorita, [id_refeicao, email])

        return response.status(200).send({ sucess: "Favorited sucessfully" })
    }
    catch (err) {
        console.log(err)
        return response.status(400).send({ error: "Check logs" })
    }
})

// A rota retorna uma lista das refeicoes favoritas de um usuario
router.post('/listar', async (request, response) => {
    try {
        const { email } = request.body

        const existePessoa = await isTherePessoa(email)
        if (!existePessoa)
            return response.status(400).send({ error: "Email not found"})

        const resultado = await listarFavoritas(email)

        //console.log(resultado)

        return response.status(200).send({ resultado })
    }
    catch (err) {
        console.log(err)
        return response.status(400).send({ error: "Check logs" })
    }
})

module.exports = app => app.use('/favoritas', router)