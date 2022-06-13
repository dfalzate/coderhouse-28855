const winston = require("winston");

const loggerProd = winston.createLogger({
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  transports: [
    new winston.transports.File({ filename: "debug.log", level: "debug" }),
    new winston.transports.File({ filename: "error.log", level: "error" }),
  ],
});

const loggerDev = winston.createLogger({
  transports: [new winston.transports.Console({ level: "info" })],
});

let logger;

if (process.argv[2] === "PROD") {
  logger = loggerProd;
} else {
  logger = loggerDev;
}

module.exports = logger;
