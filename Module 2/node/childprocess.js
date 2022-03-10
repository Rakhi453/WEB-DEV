//run time environment
//it is used to run java script on our machine
let cp= require('child_process')
console.log(cp);
cp.execFileSync("Calc");
//execsync- executes synchronnously whst we write in it, it runs this command and give output
let output= cp.execSync("node test.js");
console.log("output is: "+output);
//it gives data in binary form, so we convert it into string
