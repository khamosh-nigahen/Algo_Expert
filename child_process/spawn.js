const { spawn } = require("child_process");

const child = spawn("pwd");

// console.log(child);

child.on("exit", (code, signal) => {
    console.log(code, signal)
})

// the below streams are readable streams when child process uses it as it gets passed to main process
child.stdout.on("data", data => {
    console.log(`child stdout:\n${data}`);
  });
  
  child.stderr.on("data", data => {
    console.error(`child stderr:\n${data}`);
  });