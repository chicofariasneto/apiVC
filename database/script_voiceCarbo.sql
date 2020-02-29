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
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(45) NOT NULL,
    nascimento VARCHAR(10) NOT NULL,
    CONSTRAINT pk_pessoa PRIMARY KEY (email)
);

CREATE TABLE voiceCarbo.prato (
    id_prato INT NOT NULL,
    quantidade INT NOT NULL,
    carboidratos REAL,
    kcal REAL,
    CONSTRAINT pk_prato PRIMARY KEY (id_prato)
);

CREATE TABLE voiceCarbo.alimentoNoPrato (
    nome VARCHAR(45) NOT NULL,
    id_prato INT NOT NULL,
    CONSTRAINT fk_alimento FOREIGN KEY (nome) REFERENCES voiceCarbo.alimento (nome) ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT fk_prato FOREIGN KEY (id_prato) REFERENCES voiceCarbo.prato (id_prato) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE voiceCarbo.historico (
    idata DATE NOT NULL,
    total_carboidratos REAL,
    total_insulina REAL,
    email VARCHAR(100) NOT NULL,
    CONSTRAINT pk_historico PRIMARY KEY (idata),
    CONSTRAINT fk_pessoa FOREIGN KEY (email) REFERENCES voiceCarbo.pessoa (email) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE voiceCarbo.refeicao (
    id_refeicao INT NOT NULL,
    tipo VARCHAR(45) NOT NULL,
    horario TIMESTAMP NOT NULL,
    total_carboidratos REAL,
    total_kcal REAL,
    email VARCHAR(100),
    idata DATE,
    CONSTRAINT pk_refeicao PRIMARY KEY (id_refeicao),
    CONSTRAINT fk_pessoa FOREIGN KEY (email) REFERENCES voiceCarbo.pessoa (email) ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT fk_historico FOREIGN KEY (idata) REFERENCES voiceCarbo.historico (idata) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE voiceCarbo.favorita (
    id_favorita INT NOT NULL,
    id_refeicao INT NOT NULL,
    CONSTRAINT pk_favorita PRIMARY KEY (id_favorita),
    CONSTRAINT fk_refeicao FOREIGN KEY (id_refeicao) REFERENCES voiceCarbo.refeicao (id_refeicao) ON DELETE SET NULL ON UPDATE CASCADE
);