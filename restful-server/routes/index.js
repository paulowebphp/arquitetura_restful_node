/** Exportar módulo para quem o estiver
 * invocando. Módulo com o Consign passa
 * a receber o app
 */
module.exports = app =>
{

    app.get('/', (req, res) => 
    {
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        res.end('<h1>Javascript Olá</h1>');
    
    });//END route
    


    
};//END module.exports