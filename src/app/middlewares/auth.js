// ### IMPORTS ###
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')
// ### IMPORTS ###

// A funcao verifica se o token de acesso e valido respeitando
// o seguinte formato: "Bearer" <tokenAcesso>, o token eh dividido
// e verificado se pertence ao "secret".
module.exports = (request, response, next) => {
    
    const authHeader = request.headers.authorization
    
    if(!authHeader)
        return res.status(401).send({ error: 'O token nao foi passado como parametro nos Headers da requisicao.' })

    const parts = authHeader.split(' ');

    if (!parts.length === 2)
        return res.status(401).send({ error: 'Token mal formatado.' })

    const [ scheme, token ] = parts

    if (!/^Bearer$/i.test(scheme))
        return response.status(401).send({ error: 'Token mal formatado.' })

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return res.status(401).send({ error: 'Token invalido!' })

        request.userCpf = decoded.cpf
        return next()
    })
}