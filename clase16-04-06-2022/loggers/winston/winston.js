const winston = require("winston");

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({ level: "verbose" }),
    new winston.transports.File({ filename: "info.log", level: "info" }),
  ],
});

logger.log("silly", "Mensaje silly");
logger.log("debug", "Mensaje debug");
logger.log("verbose", "Mensaje verbose");
logger.log("info", "Mensaje info");
logger.log("warn", "Mensaje warn");
logger.log("error", "Mensaje error");

logger.info("Mensaje info");
