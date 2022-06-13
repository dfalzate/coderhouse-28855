process.on("beforeExit", () => {
  console.log("Antes de salir");
});

process.on("exit", (code) => {
  console.log(`Código de salida ${code}`);
});

process.on("uncaughtException", (err) => {
  console.log(err.message);
});

console.log(
  process.cwd(),
  process.pid,
  process.version,
  process.title,
  process.platform,
  process.memoryUsage(),
  process.execPath,
);

process.stdout.write("🔥 STDOUT\n");
console.log("🔥 STDOUT");

console.log = function (d) {
  process.stdout.write(d + "\n");
};

coderhouse();

process.exit(30);
