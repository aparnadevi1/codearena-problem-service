const winston=require("winston");
const { LOG_DB_URL } = require("./server.config");
require('winston-mongodb');
const allowedTransports=[];
//we are configuring console base printing inside our winston logs
allowedTransports.push(new winston.transports.Console(
{
    format:winston.format.combine(
        winston.format.colorize(),
       //  winston.format.simple(),
        winston.format.timestamp({
            format:'YYYY-MM-DD HH:mm:ss'
        }),
       winston.format.printf((log)=>`${log.timestamp} [${log.level}]: ${log.message}`)
    )
}))
allowedTransports.push(new winston.transports.MongoDB({
    level:'error',
    db:LOG_DB_URL,
    collection:'logs',//default name is log we gave here 

}));
allowedTransports.push(new winston.transports.File({
     filename:`app.log`

}));
const logger=winston.createLogger({
    //default format
        format:winston.format.combine(
             // winston.format.errors({stack:true}),
           // first argument to the combine method is defining how we want the timestamp to come up

            winston.format.timestamp({
                format:'YYYY-MM-DD HH:mm:ss'
            }),
            //second argument to the combine method, which defines what is exactly going to be printed in log
             winston.format.printf((log)=>`${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)

        ),
        transports:allowedTransports
});
module.exports=logger;