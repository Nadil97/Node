var fs =require("fs");

fs.writeFile("lanka.txt","RepublicOflanka.txt",renameComplete);

function renameComplete(error)
{
if(error){
    console.log(error);
}
else{
    console.log("Renamed");
}
}
console.log("Done");