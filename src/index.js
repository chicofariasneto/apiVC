const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({
        Info: '🍽📱 This is the backend of the VoiceCarbo apk, which is an api in nodeJs that uses postgreSQL as database',
        Obs: 'coming',
        Documentation: 'coming',
        Port: `APP running on port ${port}.`
    });
});

require('./app/controllers/index')(app)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})