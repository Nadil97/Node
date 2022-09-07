var fs =require("fs");
fs.readFile("sample.txt",receiveFileContent);

function receiveFileContent(error,data)
{
    console.log(error);
    console.log(data);
}