module.exports = 
{

    user: (app, req, res) =>
    {
        /** VALIDANDO CAMPOS COM assert */
        req.assert('_name', 'O nome é obrigatorio').notEmpty();
        req.assert('_email', 'Email inválido').notEmpty().isEmail();

        let errors = req.validationErrors();

        if( errors )
        {
            app.utils.error.send(errors, req, res);

            return false;
            
        }//end if
        else
        {
            return true;
            
        }//end else

    }//end user




};//END module.exports