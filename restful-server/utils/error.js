module.exports = 
{

    send: (err, req, res, code = 400) =>
    {
        console.log(`erro: ${err}`);
        res.status(code).json({

            error: err
        });
    }//end send

};//END module.exports  