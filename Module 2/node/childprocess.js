//run time environment
//it is used to run java script on our machine
let cp= require('child_process')
console.log(cp);
cp.execFileSync("Calc");

let output= cp.execSync("node test.js");
console.log("output is"+output);