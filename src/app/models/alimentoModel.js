const selectAlimentosByNome = (nome) => {
    return 'SELECT * FROM voiceCarbo.alimento WHERE nome LIKE \'%' + nome + '%\' ORDER BY nome ASC'
}

const selectAlimentoByNome = 'SELECT * FROM voiceCarbo.alimento WHERE nome = $1'

module.exports = {
    selectAlimentosByNome,
    selectAlimentoByNome
}