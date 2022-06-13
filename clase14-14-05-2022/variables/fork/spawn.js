const { spawn } = require("child_process");

const find = spawn("find", ["."]);

find.stdout.on("data", (data) => {
  console.log(data);
});

find.stderr.on("data", (err) => {
  console.log(err);
});

find.on("error", (err) => {
  console.log(err);
});

find.on("close", (code) => {
  console.log("Exit code", code);
});

for (let i = 0; i < 2e4; i++) {
  console.log(i);
}
