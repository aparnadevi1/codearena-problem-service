const winston=require("winston");
const allowedTransports=[];

//we are configuring console base printing inside our winston logs
allowedTransports.push(new winston.transports.Console())
const logger=winston.createLogger({
        format:winston.format.combine(

            //first argument to the combine method is defining how we want the timestamp to come up

            winston.format.timestamp({
                format:'YYYY-MM-DD HH:mm:ss'
            }),
            //second argument to the combine method, which defines what is exactly going to be printed in log
            winston.format.printf((log)=>`${log.timestamp}[${log.level.toUpperCase()}]:${log.message}`)

        ),
        transports:allowedTransports
});
module.exports=logger;