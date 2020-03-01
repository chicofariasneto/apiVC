const { pool } = require('../../database/index')

const jwt = require('jsonwebtoken')

const bcrypt = require('bcryptjs')

const {
    selectPessoaPeloEmail
} = require('../models/pessoaModel')

const authConfig = require('../../config/auth')

const isTherePessoa = async (email) => {
    const resultPessoa = await pool.query(selectPessoaPeloEmail, [email])
    return resultPessoa.rowCount > 0
}

const findPessoa = async (email) => {
    const resultPessoa = await pool.query(selectPessoaPeloEmail, [email])
    return resultPessoa.rows[0]
}

const cryptDado = async (data) => await bcrypt.hash(data, 10)

const gerarToken = (params = {}) => jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
})

module.exports = {
    isTherePessoa,
    findPessoa,
    cryptDado,
    gerarToken
}