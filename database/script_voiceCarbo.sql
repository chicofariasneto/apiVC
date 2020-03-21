CREATE SCHEMA voiceCarbo;

-- INSERT INSTO voiceCarbo.alimento VALUES (Nome, Medida, Peso, Kcal, Carboidratos, Grupo);
CREATE TABLE voiceCarbo.alimento (
    nome VARCHAR(100) NOT NULL,
    medida VARCHAR(100) NOT NULL,
    kcal REAL NOT NULL,
    carboidratos REAL NOT NULL,
    peso REAL,
    grupo VARCHAR(100),
    CONSTRAINT pk_alimento PRIMARY KEY (nome)
);

CREATE TABLE voiceCarbo.pessoa (
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(120) NOT NULL,
    nascimento VARCHAR(10) NOT NULL,
    medida INT NOT NULL,
    CONSTRAINT pk_pessoa PRIMARY KEY (email)
);

CREATE TABLE voiceCarbo.historico (
    id_historico SERIAL NOT NULL,
    idata DATE NOT NULL,
    total_carboidratos REAL NOT NULL,
    total_insulina INT NOT NULL,
    email VARCHAR(100) NOT NULL,
    CONSTRAINT pk_historico PRIMARY KEY (id_historico),
    CONSTRAINT fk_pessoa FOREIGN KEY (email) REFERENCES voiceCarbo.pessoa (email) ON DELETE SET NULL ON UPDATE CASCADE
);

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

CREATE TABLE voiceCarbo.prato (
    id_prato SERIAL NOT NULL,
    nome VARCHAR(100) NOT NULL,
    quantidade INT NOT NULL,
    id_refeicao SERIAL NOT NULL,
    CONSTRAINT pk_prato PRIMARY KEY (id_prato),
    CONSTRAINT fk_alimento FOREIGN KEY (nome) REFERENCES voiceCarbo.alimento (nome) ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT fk_refeicao FOREIGN KEY (id_refeicao) REFERENCES voiceCarbo.refeicao (id_refeicao) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE voiceCarbo.favorita (
    id_favorita SERIAL NOT NULL,
    id_refeicao SERIAL NOT NULL,
    CONSTRAINT pk_favorita PRIMARY KEY (id_favorita),
    CONSTRAINT fk_refeicao FOREIGN KEY (id_refeicao) REFERENCES voiceCarbo.refeicao (id_refeicao) ON DELETE SET NULL ON UPDATE CASCADE
);