const fs = require('fs')
const path = require('path')

/*
    fs permite trabalhar com file system do node
    path trabalha com caminhos de pastas/diretorios
    .readdirSysnc ele le um diretorio __dirname é este diretorio q estou trabalhando
    .filter é usado para ignorar os arquivos que comecam com . e o arquivo index.js que no caso é esse
    .forEach para dar require em cada um dos arquivos e passar o app para cada um deles
    e com isso cada controller novo criado é adicionado automaticamente ao projeto
*/
module.exports = app => {
    fs
        .readdirSync(__dirname)
        .filter(file => ((file.indexOf('.')) !== 0 && (file!== "index.js")))
        .forEach(file => require(path.resolve(__dirname, file))(app))
}