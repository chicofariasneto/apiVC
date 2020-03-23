const { pool } = require('../../database/index')

const jwt = require('jsonwebtoken')

const bcrypt = require('bcryptjs')

const {
    selectPessoaPeloEmail
} = require('../models/pessoaModel')

const authConfig = require('../../config/auth')

// Verifique se existe um usuario no banco
// com o email informado
const isTherePessoa = async (email) => {
    const resultPessoa = await pool.query(selectPessoaPeloEmail, [email])
    return resultPessoa.rowCount > 0
}

// Retorna um usuario buscado por um email
const findPessoa = async (email) => {
    const resultPessoa = await pool.query(selectPessoaPeloEmail, [email])
    return resultPessoa.rows[0]
}

// Funcao para criptografar um dado
const cryptDado = async (data) => await bcrypt.hash(data, 10)

// Funcao para gerar um token de acesso
const gerarToken = (params = {}) => jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
})

module.exports = {
    isTherePessoa,
    findPessoa,
    cryptDado,
    gerarToken
}