const express = require("express");
const app = express();
const port = 3300;

const logger = (req,res,next) =>{
    req.message = "Loggger";
    next();
}

// app.use(logger);

app.get('/',(req,res)=>{
    res.send(req.message);
})

app.get('/products',logger,(req,res)=>{
    res.send(req.message);
})

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});

