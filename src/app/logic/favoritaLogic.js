const { pool } = require('../../database')

const {
    selectFavoritas
} = require('../models/favoritaModel')

const {
    selectRefeicaoEmail
} = require('../models/refeicaoModel')

const listarFavoritas = async (email) => {
    const resultadoFavoritas = await pool.query(selectFavoritas, [email])
    const resultadoRefeicoes = await pool.query(selectRefeicaoEmail, [email])
    
    const resultado = { favoritas: resultadoFavoritas.rows.map((elemento1) => {
        return {
            favorita: resultadoRefeicoes.rows.filter((elemento2) => {
                return elemento1.id_refeicao === elemento2.id_refeicao
            })
        }
    })}
    return resultado
}

module.exports = {
    listarFavoritas
}