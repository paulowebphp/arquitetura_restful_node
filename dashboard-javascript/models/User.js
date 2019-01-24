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
                this[name] = json[name];
                    break;

            }//end switch

        }//end for

    }//END loadFromJSON





    static getUsersStorage()
    {

        let users = [];

        if( localStorage.getItem("users") )
        {

            users = JSON.parse(localStorage.getItem("users"));
            
        }//end if

        return users;

    }//END getUsersStorage




    getNewID()
    {
        let usersID = parseInt(localStorage.getItem("usersID"));

        if( !usersID > 0 ) usersID = 0;

        usersID++;

        localStorage.setItem("usersID", usersID);

        return usersID;

    }//END getNewID





    save()
    {

        let users = User.getUsersStorage();

        if( this.id > 0 )
        {

            users.map( u =>
            {

                if( u._id == this.id )
                {

                    Object.assign(u, this);

                }//end if

                return u;

            });//end map

        }//end if
        else
        {

            this._id = this.getNewID();

            users.push(this);

        }//end else

        /** Iniciando/Guardando no Local Storatge */
        localStorage.setItem("users", JSON.stringify(users));

    }//END save





    remove()
    {

        let users = User.getUsersStorage();

        users.forEach( (userData, index) =>
        {

            if( this._id == userData._id ) users.splice(index, 1);

        });//end forEach

        /** Iniciando/Guardando no Local Storatge */
        localStorage.setItem("users", JSON.stringify(users));

    }//END remove






}//END class User