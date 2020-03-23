const express = require('express')

const { pool } = require('../../database')

const {
    insertFavorita
} = require('../models/favoritaModel')

const {
    listarFavoritas
} = require('../logic/favoritaLogic')

const {
    isTherePessoa
} = require('../logic/pessoaLogic')

const router = express.Router()

router.post('/inserir', async (request, response) => {
    try {
        const { email, id_refeicao } = request.body

        const existePessoa = await isTherePessoa(email)
        if (!existePessoa)
            return response.status(400).send({ error: "Email not found"})

        await pool.query(insertFavorita, [id_refeicao, email])

        return response.status(200).send({ sucess: "Favorited sucessfully" })
    }
    catch (err) {
        console.log(err)
        return response.status(400).send({ error: "Check logs" })
    }
})

router.post('/listar', async (request, response) => {
    try {
        const { email } = request.body

        const existePessoa = await isTherePessoa(email)
        if (!existePessoa)
            return response.status(400).send({ error: "Email not found"})

        const resultado = await listarFavoritas(email)

        console.log(resultado)

        return response.status(200).send({ resultado })
    }
    catch (err) {
        console.log(err)
        return response.status(400).send({ error: "Check logs" })
    }
})

module.exports = app => app.use('/favoritas', router)