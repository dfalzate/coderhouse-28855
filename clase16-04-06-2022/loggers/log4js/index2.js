const log4js = require("log4js");

log4js.configure({
  appenders: {
    console: { type: "console" },
    error: { type: "file", filename: "error.log" },
    loggerConsole: { type: "logLevelFilter", appender: "console", level: "trace" },
    loggerFile: { type: "logLevelFilter", appender: "error", level: "error" },
  },
  categories: {
    default: { appenders: ["loggerConsole"], level: "all" },
    custom: { appenders: ["loggerConsole", "loggerFile"], level: "all" },
  },
});

console.log("DEFAULT");
const loggerDefault = log4js.getLogger();
loggerDefault.trace("Trace");
loggerDefault.debug("Debug");
loggerDefault.info("Info");
loggerDefault.warn("Warn");
loggerDefault.error("Error");
loggerDefault.fatal("Fatal");

console.log("CUSTOM");
const loggerCustom = log4js.getLogger("custom");
loggerCustom.trace("Trace");
loggerCustom.debug("Debug");
loggerCustom.info("Info");
loggerCustom.warn("Warn");
loggerCustom.error("Error");
loggerCustom.fatal("Fatal");
