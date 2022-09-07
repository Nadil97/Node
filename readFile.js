var fs =require("fs");
fs.readFile("sample.txt","binary",receiveFileContent);

function receiveFileContent(error,data)
{
if(error){
    console.log(error);
}
else{
    console.log(data);
}
}