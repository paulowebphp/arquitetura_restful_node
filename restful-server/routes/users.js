let NeDB = require('nedb');

let db = new NeDB({

    filename: 'users.db',
    autoload: true

});



/** Exportar módulo para quem o estiver
 * invocando. Módulo com o Consign passa
 * a receber o app
 */
module.exports = app =>
{
    let route = app.route('/users');

    route.get( (req, res) => 
    {
        /** sort({name:1}) Ordem Crescente */       
        db.find({}).sort({name: 1}).exec((err, users) =>
        {
            if( err )
            {
                app.utils.error.send(err, req, res);

            }//end if
            else
            {
                res.statusCode = 200;
                res.setHeader('Content-Type','application/json');
                res.json({
                    
                    /** Novidade do ES 2015: quando tenho uma
                     * chave no mesmo nome da variável não preciso
                     * escrever chave: variavel , posso escrever 
                     * apenas uma vez
                     */
                    users
                    //users: users
                });

            }//end else

        });//end db.find


        
    });//END route




    route.post( (req, res) => 
    {
        if( !app.utils.validator.user(app, req, res) ) return false;

        db.insert(req.body, (err, user) =>
        {


            if( err )
            {
                app.utils.error.send(err, req, res);
            }//end if
            else
            {
                res.status(200).json(user);

            }//end else

        });//end insert
        
    });//END route





    let routeId = app.route('/users/:id');

    routeId.get( (req, res) => 
    {
        /** _id: req.params.id o "id" se refere a /users/:id' */
        db.findOne({_id: req.params.id}).exec( (err, user) =>
        {
            if( err )
            {
                app.utils.error.send(err, req, res);
            }//end if
            else
            {
                res.status(200).json(user);

            }//end else

        });//end findOne
        
    });//END route




    routeId.put( (req, res) => 
    {
        if( !app.utils.validator.user(app, req, res) ) return false;
        
        /** _id: req.params.id o "id" se refere a /users/:id' */
        db.update({_id: req.params.id}, req.body, err =>
        {
            if( err )
            {
                app.utils.error.send(err, req, res);
            }//end if
            else
            {
                res.status(200).json(Object.assign(req.params,req.body));

            }//end else

        });//end update
        
    });//END route





    routeId.delete( (req, res) => 
    {
        /** _id: req.params.id o "id" se refere a /users/:id' */
        db.remove({_id: req.params.id}, {}, err =>
        {
            if( err )
            {
                app.utils.error.send(err, req, res);
            }//end if
            else
            {
                res.status(200).json(req.params);

            }//end else

        });//end remove
        
    });//END route





};//END module.exports