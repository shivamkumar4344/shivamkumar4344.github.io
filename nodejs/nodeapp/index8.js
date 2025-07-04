const express = require("express");
const app = express();
const port = 3300;

app.get('/products',(req,res)=>{
    res.send("Products list");
})

app.use(express.static("public"));

app.use('/images',express.static('images'));

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});