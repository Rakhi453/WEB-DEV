let fs= require("fs");
let path= require("path");
console.log(fs);
let filePath= path.join(__dirname, "file.txt");
console.log(filePath);

//create
//create file if not exist, if exist then over write
fs.writeFileSync(filePath,"Again writing on existing file");
//read
let content=fs.readFileSync(filePath,'utf-8');
console.log(content);

//update
fs.appendFileSync(filePath,"newly added content");
console.log("after update");
console.log(fs.readFileSync(filePath,'utf-8'));
console.log(content);



//delete
fs.unlinkSync(filePath);

