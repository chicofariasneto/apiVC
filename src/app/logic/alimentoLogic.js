const { pool } = require('../../database/index')

const {
    selectAlimentosByNome,
    selectAlimentoByNome
} = require('../models/alimentoModel')

// Busca um alimentos no banco de dados
// com o nome informado
const buscarAlimentos = async (nome) => {
    const selectAlimentos = await selectAlimentosByNome(nome)
    const resultAlimentos = await pool.query(selectAlimentos)
    return resultAlimentos.rows
}

// Retorna o primeiro alimento da busca 
// com o nome informado
const buscarAlimento = async (nome) => {
    const resultAlimento = await pool.query(selectAlimentoByNome, [nome])
    return resultAlimento.rows[0]
}

module.exports = {
    buscarAlimentos,
    buscarAlimento
}