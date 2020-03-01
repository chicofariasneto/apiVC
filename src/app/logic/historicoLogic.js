const { pool } = require('../../database/index')

const {
    selectHistoricoIDataEmail,
    selectHistoricoId,
    insertHistorico
} = require('../models/historicoModel')

const buildHistorico = async (iData, email) => {
    const resultHistorico = await pool.query(selectHistoricoIDataEmail, [iData, email])
    
    // case exist
    if (resultHistorico.rowCount > 0)
        return resultHistorico.rows[0].id_historico
    
    // then create
    const resultHistoricoCreate = await pool.query(insertHistorico, [iData, email])
    return resultHistoricoCreate.rows[0].id_historico
}

const buscarHistorico = async (id_historico) => {
    const resultHistorico = await pool.query(selectHistoricoId, [id_historico])
    return resultHistorico.rows[0]
}

module.exports = {
    buildHistorico,
    buscarHistorico
}