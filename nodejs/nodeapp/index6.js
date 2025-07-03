const express = require("express");
const app = express();
const port = 3300;


app.use(express.json());

app.post('/',(req,res)=>{
    res.send(req.body); 
})





app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});