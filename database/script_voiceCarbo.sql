CREATE SCHEMA voiceCarbo;

-- INSERT INSTO voiceCarbo.alimento VALUES (Nome, Medida, Peso, Kcal, Carboidratos, Grupo);
CREATE TABLE voiceCarbo.alimento (
    nome VARCHAR(100) NOT NULL,
    medida VARCHAR(100) NOT NULL,
    kcal REAL,
    carboidratos REAL,
    peso REAL,
    grupo VARCHAR(100),
    CONSTRAINT pk_alimento PRIMARY KEY (nome)
);