import fs from "fs";

fs.writeFile("./myfile.txt","Hello World",(err)=>{
    if(err) throw err;
});