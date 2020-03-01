const { pool } = require('../../database/index')

const {
    selectRefeicaoId
} = require('../models/refeicaoModel')

const {
    selectPratosId
} = require('../models/pratoModel')

const buscarRefeicao = async (id_refeicao) => {
    const resultadoRefeicao = await pool.query(selectRefeicaoId, [id_refeicao])
    const resultadoPratos = await pool.query(selectPratosId, [id_refeicao])

    const resultado = {
        refeicao: resultadoRefeicao.rows[0],
        pratos: resultadoPratos.rows
    }

    return resultado
}

module.exports = {
    buscarRefeicao
}