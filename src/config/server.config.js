const dotenv=require("dotenv");
dotenv.config();
module.exports={
    PORT:process.env.PORT||3143,
    ATLAS_DB_URL:process.env.ATLAS_DB_URL,
    NODE_ENV:process.env.NODE_ENV
}