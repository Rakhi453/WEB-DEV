//console.log("hello world");
//let input= process.argv[2];
//console.log(input);

//Assumption-folder ke ander no folder then only it will work
let fs= require("fs");
let path= require("path");
let folderkapath=process.argv[2];
console.log(folderkapath)

let folderExists= fs.existsSync(folderkapath);
let extensions={
    Audio:[".mp3"],
    video:[".mp4",".mkv"],
    Document:[".doc",".txt",".pdf"],
    Image:[".png",".jpg",".gif"],
    Software:[".exe"]

};


if(folderExists){
    //we will code
    let files= fs.readdirSync(folderkapath);
    //console.log(files);
    for(let i=0; i<files.length;i++){
        
        let ext= path.extname(files[i]);
        let nameOfFolder=giveFolderName(ext);
        //console.log("Ext ",ext, "folder ",nameOfFolder);
        let pathOfFolder= path.join(folderkapath,nameOfFolder);
        let exist=fs.existsSync(pathOfFolder);
        if(exist){
            moveFile(folderkapath,pathOfFolder,files[i]);
        }else{
            fs.mkdirSync(pathOfFolder);
            moveFile(folderkapath,pathOfFolder,files[i]);

        }
    }

}
else{
    console.log("Please enter a valid path");
}
function giveFolderName(ext){
    for(let key in extensions){
        let extArr=extensions[key];
        for(let i=0;i<extArr.length;i++){
            if(extArr[i]==ext){
                return key;
            }
        }
    }return "others"
}
function moveFile(folderkapath,pathOfFolder,fileName){
    let sourcePath= path.join(folderkapath, fileName);
    let destinationPath= path.join(pathOfFolder,fileName);
    fs.copyFileSync(sourcePath,destinationPath);
    fs.unlinkSync(sourcePath);
}