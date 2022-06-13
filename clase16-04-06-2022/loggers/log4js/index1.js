const log4js = require("log4js");

log4js.configure({
  appenders: {
    myConsole: { type: "console" },
    myLoggerFile1: { type: "file", filename: "file1.log" },
    myLoggerFile2: { type: "file", filename: "file2.log" },
  },
  categories: {
    default: { appenders: ["myConsole"], level: "trace" },
    consola: { appenders: ["myConsole"], level: "warn" },
    file1: { appenders: ["myLoggerFile1"], level: "error" },
    file2: { appenders: ["myLoggerFile2"], level: "fatal" },
    mezcla: { appenders: ["myConsole", "myLoggerFile2"], level: "fatal" },
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

console.log("CONSOLE");
const loggerConsole = log4js.getLogger("consola");
loggerConsole.trace("Trace");
loggerConsole.debug("Debug");
loggerConsole.info("Info");
loggerConsole.warn("Warn");
loggerConsole.error("Error");
loggerConsole.fatal("Fatal");

console.log("FILE1");
const loggerFile1 = log4js.getLogger("file1");
loggerFile1.trace("Trace");
loggerFile1.debug("Debug");
loggerFile1.info("Info");
loggerFile1.warn("Warn");
loggerFile1.error("Error");
loggerFile1.fatal("Fatal");

console.log("FILE2");
const loggerFile2 = log4js.getLogger("file2");
loggerFile2.trace("Trace");
loggerFile2.debug("Debug");
loggerFile2.info("Info");
loggerFile2.warn("Warn");
loggerFile2.error("Error");
loggerFile2.fatal("Fatal");

console.log("MEZCLA");
const loggerMezcla = log4js.getLogger("mezcla");
loggerMezcla.trace("Trace");
loggerMezcla.debug("Debug");
loggerMezcla.info("Info");
loggerMezcla.warn("Warn");
loggerMezcla.error("Error");
loggerMezcla.fatal("Fatal");

// import express from "express";

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const PORT = process.env.PORT || 3000;
// const server = app.listen(PORT, () =>
//   loggerFile1.info(`🚀 Server started on port http://localhost:${PORT}`),
// );
// server.on("error", (err) => loggerFile1.error(error));
