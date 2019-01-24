class HttpRequest
{

    static get( url, params = {} ) { return HttpRequest.request('GET', url, params); }//END get

    static put( url, params = {} ) { return HttpRequest.request('PUT', url, params); }//END get

    static post( url, params = {} ) { return HttpRequest.request('POST', url, params); }//END get

    static delete( url, params = {} ) { return HttpRequest.request('DELETE', url, params) ;}//END get






    static request( method, url, params = {} )
    {

        return new Promise( (resolve, reject) =>
        {

            let ajax = new XMLHttpRequest();

            /** Métodos HTTP por padrão em Maiúsculas */
            ajax.open(method.toUpperCase(), url);

            ajax.onerror = event =>
            {

                reject(e);

            }//end ajax.onerror
    
            ajax.onload = event =>
            {
                let obj = {};
    
                try
                {
                    obj = JSON.parse(ajax.responseText);
    
                }//end try
                catch(e)
                {
                    reject(e);

                    console.error(e);
    
                }//end catch

                resolve(obj);
            
            // ';' adicionado no curso javascript_Aula_80_U05 (02:05)
            };//end ajax.onload
            
            ajax.setRequestHeader('Content-Type', 'application/json');

            ajax.send(JSON.stringify(params));

        });//end Promise

    }//END request









}//END class HttpRequest
