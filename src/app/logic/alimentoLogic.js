const { pool } = require('../../database/index')

const {
    selectAlimentosByNome
} = require('../models/alimentoModel')

const buscarAlimentos = async (nome) => {
    const selectAlimentos = await selectAlimentosByNome(nome)
    const resultAlimentos = await pool.query(selectAlimentos)
    return resultAlimentos.rows
}

module.exports = {
    buscarAlimentos,
}