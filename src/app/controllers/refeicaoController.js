const { pool } = require('../../database/index')

const express = require('express')

const router = express.Router()

const {
    isTherePessoa,
    findPessoa
} = require('../logic/pessoaLogic')

const {
    buildHistorico,
    buscarHistorico
} = require('../logic/historicoLogic')

const {
    buscarRefeicao
} = require('../logic/refeicaoLogic')

const {
    buscarAlimento
} = require('../logic/alimentoLogic')

const {
    updateHistorico
} = require('../models/historicoModel')

const {
    insertRefeicao,
    updateRefeicao
} = require('../models/refeicaoModel')

const {
    insertPrato
} = require('../models/pratoModel')

// Rota para registrar uma refeicao
router.post('/registrar', async (request, response) => {
    try {
        const { idata, email, tipo } = request.body
        const { pratos } = request.body

        const resultadoPessoa = await isTherePessoa(email)
        if (!resultadoPessoa)
            return response.status(400).send({ error: 'Email not found' })

        const pessoa = await findPessoa(email)

        const id_historico = await buildHistorico(idata, email)

        const resultRefeicao = await pool.query(insertRefeicao, [tipo, email, id_historico])
        const id_refeicao = resultRefeicao.rows[0].id_refeicao

        var refeicaoCarboidrato = 0.0
        var refeicaoCaloria = 0.0

        for (const i of pratos) {
            const { nome, quantidade } = i

            const alimento = await buscarAlimento(nome)
            refeicaoCarboidrato += alimento.carboidratos * quantidade
            refeicaoCaloria += alimento.kcal * quantidade

            await pool.query(insertPrato, [nome, quantidade, id_refeicao])
        }

        // Atualizar valores na refeicao
        const updateCarboidrato = await updateRefeicao('total_carboidratos', refeicaoCarboidrato, id_refeicao)
        await pool.query(updateCarboidrato)
        const updateCaloria = await updateRefeicao('total_kcal', refeicaoCaloria, id_refeicao)
        await pool.query(updateCaloria)
        const updateInsulina = await updateRefeicao('insulina', Math.floor(refeicaoCarboidrato / pessoa.medida), id_refeicao)
        await pool.query(updateInsulina)
        
        // Atualizar valores no historico
        const resultadoHistorico = await buscarHistorico(id_historico)
        const updateHistoricoCarboidratos = await updateHistorico('total_carboidratos', resultadoHistorico.total_carboidratos + refeicaoCarboidrato, id_historico)
        await pool.query(updateHistoricoCarboidratos)
        const updateHistoricoInsulina = await updateHistorico('total_insulina', resultadoHistorico.total_insulina + Math.floor(refeicaoCarboidrato / pessoa.medida), id_historico)
        await pool.query(updateHistoricoInsulina)

        const refeicao = await buscarRefeicao(id_refeicao)

        return response.status(201).send({ refeicao })

    } catch (err) {
        console.log(err)
        return response.status(400).send({ error: "Check logs" })
    }
})


module.exports = app => app.use('/refeicao', router)