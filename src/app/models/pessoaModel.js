const selectPessoaPeloEmail = 'SELECT * FROM voiceCarbo.pessoa WHERE email = $1'

const insertPessoa = 'INSERT INTO voiceCarbo.pessoa VALUES ($1, $2, $3, $4, $5);'

const updatePessoa= (param1, param2, param3) => {
    return 'UPDATE voiceCarbo.pessoa SET ' + param1 + ' = ' + param2 + ' WHERE email = ' + '\'' + param3 + '\''
}

module.exports = {
    selectPessoaPeloEmail,
    insertPessoa,
    updatePessoa
}