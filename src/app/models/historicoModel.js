/*
CREATE TABLE voiceCarbo.historico (
    id_historico SERIAL NOT NULL,
    idata DATE NOT NULL,
    total_carboidratos REAL NOT NULL,
    total_insulina INT NOT NULL,
    email VARCHAR(100) NOT NULL,
    CONSTRAINT pk_historico PRIMARY KEY (id_historico),
    CONSTRAINT fk_pessoa FOREIGN KEY (email) REFERENCES voiceCarbo.pessoa (email) ON DELETE SET NULL ON UPDATE CASCADE
);
*/

const selectHistoricoIDataEmail = 'SELECT * FROM voiceCarbo.historico WHERE idata = $1 AND email = $2'

const selectHistoricoId = 'SELECT * FROM voiceCarbo.historico WHERE id_historico = $1'

const insertHistorico = 'INSERT INTO voiceCarbo.historico VALUES (DEFAULT, $1, 0.0, 0, $2) RETURNING id_historico'

const updateHistorico = (param1, param2, param3) => {
    return 'UPDATE voiceCarbo.historico SET ' + param1 + ' = \'' + param2 + '\' WHERE id_historico = ' + param3
}

module.exports = {
    selectHistoricoIDataEmail,
    selectHistoricoId,
    insertHistorico,
    updateHistorico
}