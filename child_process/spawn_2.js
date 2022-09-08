
//  the below code be a little confusing but think in the direction of main process and child process
// stdin is readable for main process and stdout, stderr is writable stream for main process
// for child proces it is reverse, stdout and stderr is readable stream and stdin is writable stream


const { spawn } = require("child_process");

const find = spawn("find", [".", "-type", "f"]);
const wc = spawn("wc", ["-l"]);

find.stdout.pipe(wc.stdin);

wc.stdout.on("data", data => {
  console.log(`Number of files ${data}`);
});