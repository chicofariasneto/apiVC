const { Pool } = require('pg');

/* Conexao do banco de dados local */
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'apis',
    password: 'postgres',
    port: 5432,
})

/* Conexao do banco de dados com o Heroku *//*
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });
*/
module.exports = {
    pool,
}