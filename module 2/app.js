const Logger = require("./logger");
const logger = new Logger(); 

logger.on("messageLogged", function(message){
    console.log(message);
});
logger.log();