const mongoose=require("mongoose");
const { ATLAS_DB_URL, NODE_ENV } = require("./server.config");
async function connectToDB()
{
    try{
        if(NODE_ENV=="development")
        {
           await mongoose.connect(ATLAS_DB_URL);  
        }
        // else if(NODE_ENV=="production"){
        //     await mongoose.connect(ATLAS_DB_URL);  
        // }
         
    }
    catch(error)
    {
        console.log("unable to connect to the b server");
        console.log(error);
    }
}
module.exports=connectToDB;