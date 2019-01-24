/** Chamando módulo 'http' */
// const http = require('http');

/** Express já chama o 'http' internamente */
const express = require('express');

/** Nâo precisa colocar a extensão do index (.js)
 * Pois por padrão já procura este tipo de arquivos
 * então pode omitir
 */
let routesIndex = require('./routes/index');
let routesUsers = require('./routes/users');




/** Chamando o Express */
let app = express();


/** Fazendo o use das rotas */
app.use(routesIndex);
app.use('/users', routesUsers);





/** app.listen */
app.listen(3000,'127.0.0.1', () =>
{

    console.log('servidor rodando');

});//end server.listen




