const selectAlimentosByNome = (nome) => {
    return 'SELECT * FROM voiceCarbo.alimento WHERE nome LIKE \'%' + nome + '%\' ORDER BY nome ASC'
}

module.exports = {
    selectAlimentosByNome,
}