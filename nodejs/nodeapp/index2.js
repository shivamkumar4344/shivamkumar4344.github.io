import fs from "fs";

// fs.writeFile("./myfile.txt","Hello World",(err)=>{
//     if(err) throw err;
// });


// fs.appendFile("myfile.txt","\nHello Shivam\n",(err)=>{
//     if(err) console.log(err);
// })

// fs.readFile("myfile.txt","utf-8",(err,data)=>{
//     if(err) console.log(err);
//     else console.log(data);
// })

fs.rename("myfile.txt","newfile.txt",(err)=>{
    if(err) console.log(err);
})