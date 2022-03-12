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

//create a directory
//fs.mkdirSync("my directory");



//to check if direactory exists
if(!fs.existsSync("hmari directory")){
    fs.mkdirSync("hmari directory");
}

//to read a directory(we gave here double slash to remove error)
let folderPath="C:\\Users\\rakhi_000\\OneDrive\\Desktop\\FJP-6\\Module 1"
let contentOfFolder=fs.readdirSync(folderPath);
console.log(contentOfFolder);


//to copy a file

//let copyFile=fs.copyFileSync( C:\\Users\\rakhi_000\\OneDrive\\Desktop\\FJP-6\\module\\calculator.js, C:\\Users\\rakhi_000\\OneDrive\\Desktop\\FJP-6\\Module 2\\node );
//console.log(copyFile);

//delete a directory

//fs.rmdirSync("hmari directory");


//copy a file

let sourcePath= path.join(__dirname, "file1.txt");
let destPath= path.join(__dirname, "my directory", "file1.txt");
console.log(sourcePath);
console.log(destPath);

fs.copyFileSync(sourcePath, destPath);
