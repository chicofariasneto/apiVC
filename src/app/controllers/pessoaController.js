// ### IMPORTS ###
const { pool } = require('../../database/index')

const bcrypt = require('bcryptjs')

const { 
    isTherePessoa,
    findPessoa,
    cryptDado,
    gerarToken
} = require('../logic/pessoaLogic')

const { insertPessoa } = require('../models/pessoaModel')

const express = require('express')

const router = express.Router()
// ### IMPORTS ###

router.post('/cadastrar', async (request, response) => {
    try {
        const { nome, email, senha, nascimento } = request.body

        const existPessoa = await isTherePessoa(email)
        if (existPessoa)
            return response.status(400).send({ error: "Email alreay exist, try with another one"})
        
        const senhaCrypt = await cryptDado(senha)

        await pool.query(insertPessoa, [nome, email, senhaCrypt, nascimento])

        const pessoa = await findPessoa(email)

        pessoa.senha = undefined

        return response.status(201).send({
            pessoa,
            token: gerarToken({ email: pessoa.email })
        })

    } catch (err) {
        console.log(err)
        return response.status(400).send({ error: "Check logs" })
    }
})

router.post('/login', async (request, response) => {
    try {
        const { email, senha } = request.body

        const existPessoa = await isTherePessoa(email)
        if (!existPessoa)
            return response.status(400).send({ error: "Email not found" })

        const pessoa = await findPessoa(email)

        if (!await bcrypt.compare(senha, pessoa.senha))
            return response.status(400).send({ error: "invalid password" })
        
        pessoa.senha = undefined

        return response.status(201).send({
            pessoa,
            token: gerarToken({ email: pessoa.email })
        })
    }
    catch (err) {
        console.log(err)
        return response.status(400).send({ error: "Check logs" })
    }
})

module.exports = app => app.use('/pessoas', router)