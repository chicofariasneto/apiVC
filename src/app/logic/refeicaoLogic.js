const { pool } = require('../../database/index')

const {
    selectRefeicaoId,
    selectRefeicoesIdata
} = require('../models/refeicaoModel')

const {
    selectPrato,
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

const historicoIdata = async (email, idata) => {
    const resultadoRefeicoes = await pool.query(selectRefeicoesIdata, [email, idata])
    const resultadoPratos = await pool.query(selectPrato)

    const resultado = {
        refeicoes: resultadoRefeicoes.rows.map((elemento1) => {
            return {
                refeicao: elemento1,
                pratos: {
                    prato: resultadoPratos.rows.filter((elemento2) => {
                        return elemento1.id_refeicao === elemento2.id_refeicao
                    })
                }
            }
        })
    }

    return resultado
}

module.exports = {
    buscarRefeicao,
    historicoIdata
}