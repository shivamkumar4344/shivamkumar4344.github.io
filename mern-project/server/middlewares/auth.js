import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const secretToken = process.env.SECRETKEY
const authenticate =(req,res,next)=>{

    try{
        let token = req.headers.authorization;
        token = token.split(" ")[1];
        const verification = jwt.verify(token,secretToken);
        req.role = verification.role;
        next();
    }
    catch(err){
        console.log(err);
        res.status(401).json({message:"Authetication failed"});
    }

}

const authorize = (role) =>{
    return(req,res,next)=>{
        if(role === req.role)
        {   
            next();

        }
        else{
            res.status(401).send({message:"Not an Admin"});
        }
        
    }
}

export {authenticate,authorize};