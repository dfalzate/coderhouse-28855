const log4js = require("log4js");

log4js.configure({
  appenders: {
    consola: { type: "console" },
    archivoDebug: { type: "file", filename: "debug.log" },
    archivoErrores: { type: "file", filename: "errores.log" },
    loggerInformacion: { type: "logLevelFilter", appender: "consola", level: "info" },
    loggerDebug: { type: "logLevelFilter", appender: "archivoDebug", level: "debug" },
    loggerErrores: { type: "logLevelFilter", appender: "archivoErrores", level: "error" },
  },
  categories: {
    default: { appenders: ["loggerInformacion"], level: "all" },
    prod: { appenders: ["loggerDebug", "loggerErrores"], level: "all" },
  },
});

let logger;

if (process.argv[2] === "PROD") {
  logger = log4js.getLogger("prod");
} else {
  logger = log4js.getLogger();
}

module.exports = logger;
