/*
CREATE TABLE voiceCarbo.refeicao (
    id_refeicao SERIAL NOT NULL,
    tipo VARCHAR(45) NOT NULL,
    idata Date DEFAULT CURRENT_TIMESTAMP,
    total_carboidratos REAL NOT NULL,
    total_kcal REAL NOT NULL,
    insulina INT NOT NULL,
    email VARCHAR(100),
    id_historico SERIAL NOT NULL,
    CONSTRAINT pk_refeicao PRIMARY KEY (id_refeicao),
    CONSTRAINT fk_pessoa FOREIGN KEY (email) REFERENCES voiceCarbo.pessoa (email) ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT fk_historico FOREIGN KEY (id_historico) REFERENCES voiceCarbo.historico (id_historico) ON DELETE SET NULL ON UPDATE CASCADE
);
*/

const selectRefeicaoId = 'SELECT * FROM voiceCarbo.refeicao WHERE id_refeicao = $1'

const selectRefeicoesIdata = 'select * from voiceCarbo.refeicao WHERE email = $1 and idata = $2 ORDER BY id_refeicao ASC'

const insertRefeicao = 'INSERT INTO voiceCarbo.refeicao VALUES (DEFAULT, $1, DEFAULT, 0.0, 0.0, 0, $2, $3) RETURNING id_refeicao'

const updateRefeicao = (param1, param2, param3) => {
    return 'UPDATE voiceCarbo.refeicao SET ' + param1 + ' = \'' + param2 + '\' WHERE id_refeicao = ' + param3
}

module.exports = {
    selectRefeicaoId,
    selectRefeicoesIdata,
    insertRefeicao,
    updateRefeicao
}