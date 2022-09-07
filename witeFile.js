var fs =require("fs");
var content="sri lanka  is one the countries in Asia";
fs.writeFile("lanka.txt",content,"utf8",fileWritingComplete);

function fileWritingComplete(error)
{
if(error){
    console.log(error);
}
else{
    console.log("File Writing Completed");
}
}
console.log("Done");