const { pool } = require('../../database/index')

const {
    selectAlimentosByNome,
    selectAlimentoByNome
} = require('../models/alimentoModel')

const buscarAlimentos = async (nome) => {
    const selectAlimentos = await selectAlimentosByNome(nome)
    const resultAlimentos = await pool.query(selectAlimentos)
    return resultAlimentos.rows
}

const buscarAlimento = async (nome) => {
    const resultAlimento = await pool.query(selectAlimentoByNome, [nome])
    return resultAlimento.rows[0]
}

module.exports = {
    buscarAlimentos,
    buscarAlimento
}