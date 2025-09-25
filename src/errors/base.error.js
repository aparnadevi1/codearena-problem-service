class BaseError extends Error{
     constructor(name,statusCode,description,details)
     {
        super(description);//calling base class (Error class) wirh message
        this.name=name;
        this.statusCode=statusCode;
        this.details=details;
        
        
     }
}
module.exports=BaseError;