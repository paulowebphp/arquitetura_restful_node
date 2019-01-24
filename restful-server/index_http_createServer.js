const http = require('http');


let server = http.createServer( (req, res) => 
{

    console.log('url: ',req.url);
    console.log('metodo: ',req.method);

    switch( req.url )
    {
        case '/':
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        res.end('<h1>Javascript Olá</h1>');
            break;
    
        case '/users':
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify({

            users:[{
                name: 'Hcode',
                email: 'contato@hcode.com',
                id:1
            }]

        }));
            break;
    
        default:
            break;
    }//end switch

});//end createServer


server.listen(3000,'127.0.0.1', () =>
{

    console.log('servidor rodando');

});//end listen