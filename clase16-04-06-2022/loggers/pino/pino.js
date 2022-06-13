const logger = require("pino")();

logger.level = "trace";

logger.info("info");
logger.error("error");

logger.info("Mensaje %d", 400);
logger.info({ a: 42 }, "Mensaje %d", 400);

const child = logger.child({ a: "property" });
child.info("Hola child");

logger.trace("trace");
logger.debug("debug");
logger.info("info");
logger.warn("warn");
logger.error("error");
logger.fatal("fatal");
child.trace("trace");
child.debug("debug");
child.info("info");
child.warn("warn");
child.error("error");
child.fatal("fatal");
