const selectFavoritas = 'SELECT * FROM voiceCarbo.favorita WHERE email = $1 ORDER BY id_refeicao ASC'

const insertFavorita = 'INSERT INTO voiceCarbo.favorita VALUES ($1, $2);'

module.exports = {
    selectFavoritas,
    insertFavorita
}