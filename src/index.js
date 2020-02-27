// ### IMPORTS ###
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000
// ### IMPORTS ###

app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

/* main route */
app.get('/', (request, response) => {
    response.json({
        Info: 'API do aplicativo VoiceCarbo, desenvolvido pela Universidade Federal de Sergipe.',
        Obs: 'coming',
        Documentation: 'coming',
        Port: `APP running on port ${port}.`
    });
});

require('./app/controllers/index')(app)

/* port config */
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});