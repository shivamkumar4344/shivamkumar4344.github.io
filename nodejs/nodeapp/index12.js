import express from "express";
const app = express();
const port = Number( process.argv[2] ) || 8080;

app.get('/',(req,res)=>{
    res.send(`Hello World from port ${port}`);
})

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})

// let name = process.argv[2] || "John";
// console.log("Hello " +name);
