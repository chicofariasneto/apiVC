/*
CREATE TABLE voiceCarbo.prato (
    id_prato SERIAL NOT NULL,
    nome VARCHAR(100) NOT NULL,
    quantidade INT NOT NULL,
    id_refeicao SERIAL NOT NULL,
    CONSTRAINT pk_prato PRIMARY KEY (id_prato),
    CONSTRAINT fk_alimento FOREIGN KEY (nome) REFERENCES voiceCarbo.alimento (nome) ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT fk_refeicao FOREIGN KEY (id_refeicao) REFERENCES voiceCarbo.refeicao (id_refeicao) ON DELETE SET NULL ON UPDATE CASCADE
);
*/

const selectPrato = 'SELECT * FROM voiceCarbo.prato'

const selectPratoId = 'SELECT * FROM voiceCarbo.prato WHERE id_prato = $1'

const selectPratosId = 'SELECT * FROM voiceCarbo.prato WHERE id_refeicao = $1'

const insertPrato = 'INSERT INTO voiceCarbo.prato VALUES (DEFAULT, $1, $2, $3) RETURNING id_prato'

const updatePrato = (param1, param2, param3) => {
    return 'UPDATE voiceCarbo.prato SET ' + param1 + ' = \'' + param2 + '\' WHERE id_prato = ' + param3
}

module.exports = {
    selectPrato,
    selectPratoId,
    selectPratosId,
    insertPrato,
    updatePrato
}