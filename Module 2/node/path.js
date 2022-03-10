//"C:\Users\rakhi_000\OneDrive\Desktop\FJP-6\Module 2\node\path.js"
let path=require("path");
console.log(path);

let extensionName=path.extname("\Users\rakhi_000\OneDrive\Desktop\FJP-6\Module 2\node\path.js");
console.log(extensionName);
//let baseName=path.basename("C:\Users\rakhi_000\OneDrive\Desktop\FJP-6\Module 2\node\childprocess.js");
//console.log(baseName);
console.log(__dirname);
console.log(__filename);
let baseName= path.basename(__filename);
console.log(baseName);

let dirPath=__dirname;
console.log(dirPath);

let newFilePath= path.join(dirPath,"test.js");
console.log(newFilePath);