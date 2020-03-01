const selectPessoaPeloEmail = 'SELECT * FROM voiceCarbo.pessoa WHERE email = $1'

const insertPessoa = 'INSERT INTO voiceCarbo.pessoa VALUES ($1,$2,$3,$4);'

module.exports = {
    selectPessoaPeloEmail,
    insertPessoa
}