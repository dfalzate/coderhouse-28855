const autocannon = require("autocannon");
const { PassThrough } = require("stream");

function run(url) {
  const buf = [];
  const outputStream = new PassThrough();

  const inst = autocannon({
    url,
    connections: 100,
    duration: 20,
  });

  autocannon.track(inst, { outputStream });
  outputStream.on("data", (data) => buf.push(data));
  inst.on("done", () => {
    process.stdout.write(Buffer.concat(buf));
  });
}

console.log("Running all tests");

// run("http://localhost:3000/auth-bloq?userName=Coderhouse&password=123456");
run("http://localhost:3000/auth-nobloq?userName=Coderhouse&password=123456");
