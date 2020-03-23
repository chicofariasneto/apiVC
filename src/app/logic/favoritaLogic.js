const { pool } = require('../../database')

const {
    selectFavoritas,
    selectFavorita
} = require('../models/favoritaModel')

const {
    selectRefeicaoEmail
} = require('../models/refeicaoModel')

// Funcao logica para formatar a lista
// das refeicoes favoritas de um usuario
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

// Verifica se uma refeicao ja eh favorita
const isFavorita = async (email, id_refeicao) => {
    const resultadoFavorita = await pool.query(selectFavorita, [email, id_refeicao])

    return resultadoFavorita.rowCount > 0
}

module.exports = {
    listarFavoritas,
    isFavorita
}