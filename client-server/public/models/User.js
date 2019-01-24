class User
{
    constructor(
        name,
        gender,
        birth,
        country,
        email,
        password,
        photo,
        admin
    )
    {
        this._id;
        this._name = name;
        this._gender = gender;
        this._birth = birth;
        this._country = country;
        this._email = email;
        this._password = password;
        this._photo = photo;
        this._admin = admin;
        this._register = new Date();
        
    }//END constructor





    /** Getter */
    get id() { return this._id; }//END id

    /** Getter */
    get register() { return this._register; }//END register

    /** Getter */
    get name() { return this._name; }//END name

    /** Getter */
    get gender() { return this._gender; }//END gender

    /** Getter */
    get birth() { return this._birth; }//END birth

    /** Getter */
    get country() { return this._country; }//END country

    /** Getter */
    get email() { return this._email; }//END email

    /** Getter */
    get password() { return this._password; }//END password

    /** Getter */
    get photo() { return this._photo; }//END photo

    /** Getter */
    get admin() { return this._admin; }//END admin






    
    /** Setter */
    //set name(value) { this._name = value; }//END name

    /** Setter */
    //set gender(value) { this._gender = value; }//END gender

    /** Setter */
    //set birth(value) { this._birth = value; }//END birth

    /** Setter */
    //set country(value) { this._country = value; }//END country

    /** Setter */
    //set email(value) { this._email = value; }//END email

    /** Setter */
    //set password(value) { this._password = value; }//END password

    /** Setter */
    set photo(value) { this._photo = value; }//END photo

    /** Setter */
    //set admin(value) { this._admin = value; }//END admin






    
    loadFromJSON( json )
    {

        for( let name in json )
        {

            switch ( name )
            {
                case '_register':
                this[name] = new Date(json[name]);
                    break;
            
                default:
                if( name.substring(0,1) === '_' ) this[name] = json[name];
                    break;

            }//end switch

        }//end for

    }//END loadFromJSON





    static getUsersStorage()
    {

        return HttpRequest.get('/users');

    }//END getUsersStorage





    toJSON()
    {
        let json = {};

        Object.keys(this).forEach( key =>
        {
            if( this[key] !== undefined) json[key] = this[key];

        });//end Object.keys().forEach()

        return json;

    }//END toJSON




    save()
    {

        return new Promise( (resolve, reject) =>
        {
            let promise;

            if( this.id )
            {
                promise = HttpRequest.put(`/users/${this.id}`, this.toJSON());

            }//end if
            else
            {
                promise = HttpRequest.post('/users', this.toJSON());

            }//end else

            promise.then( data =>
            {

                this.loadFromJSON(data);

                resolve(this);

            }).catch( e =>
            {

                reject(e);

            });//end promise.then().catch()

        });//end Promise

    }//END save





    remove()
    {

        return HttpRequest.delete(`/users/${this.id}`);

    }//END remove






}//END class User