import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const SECRET = "djkab";

const app = express();
const port = 3300;
let users = [];

app.use(express.json());

const authenticate = (req,res,next) =>{
    try{
    let token = req.headers.authorization;
    token = token.split(" ")[1]; 
    const verification = jwt.verify(token,SECRET);
    req.role = verification.role;
    next();
    }
    catch(err){
        res.status(401).send({"message":"Invalid token"});
    }
   
}

const authorize = (role) =>{
    return(req,res,next)=>{
        if(req.role === "admin")
        {   
            next();

        }
        else{
            res.status(401).send({message:"Not an Admin"});
        }
        
    }
}


app.post('/login',async(req,res)=>{
    const {email,pass} = req.body;
    const exist = users.find((user)=>user.email === email);
    const checkPass = await bcrypt.compare(pass,exist.pass);
    // const found = users.find((user)=> user.email === email && user.pass === pass);
    if(checkPass)
    {
        const token = jwt.sign(found,SECRET,{expiresIn:"1h"});
        res.json( {user:"Found" , token} );
    }
    else{
        res.status(403).send("Access Denied");
    }
    
});


app.get('/users',authenticate,authorize("admin"),(req,res)=>{
    res.json(users);
})

app.post('/register',async (req,res)=>{
    const {name,email,pass} = req.body;
    const hashedPass = await bcrypt.hash(pass,SECRET);
    users.push({
        name,
        email,
        hashedPass:pass,
        role

    })
})


app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});

