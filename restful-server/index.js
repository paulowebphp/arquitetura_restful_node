/** Chamando módulo 'http' */
// const http = require('http');

/** Express já chama o 'http' internamente */
const express = require('express');

/** CONSIGN */
const consign = require('consign');

/** BODY PARSER */
const bodyParser = require('body-parser');

/** EXPRESS VALIDATOR */
const expressValidator = require('express-validator');




/** Chamando o Express */
let app = express();

/** BODY PARSER ----- */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/** EXPRESS VALIDATOR ----- */
app.use(expressValidator());

/** CONSIGN --------- */
consign().include('routes').include('utils').into(app);



/** app.listen */
app.listen(4000,'127.0.0.1', () =>
{

    console.log('Servidor RESTful rodando...');

});//end server.listen




