import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();
const dbhost = process.env.DBCONNECT
const app = express();
const port = 3300;
const secretToken = process.env.SECRETKEY
app.use(express.json());

mongoose.connect(dbhost).then(() => {
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
});


const userSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    role: { type: String }
}, { timestamps: true })

const userModel = mongoose.model("User", userSchema);

const authenticate =(req,res,next)=>{

    try{
        const token = req.headers.authorization;
        token = token.split(" ")[1];
        const verification = jwt.verify(token,secretToken);
        req.role = verification.role;
        next();
    }
    catch(err){
        res.status(401).json({message:"Authetication failed"});
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

app.post('/register', async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const hashedPass = await bcrypt.hash(password, 10);

        const user = {
            name, email, password: hashedPass, role
        }
        const result = await userModel.create(user);
        res.status(201).json(result);
    }
    catch (err) {
        console.log(err)
        res.sendStatus(401);
    }

})


app.get("/users", authenticate, authorize("admin"),async (req, res) => {
    try {
        const result = await userModel.find();
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "Something went wrong" });
    }
})



app.post("/login",async (req, res) => {
    try {
        const { email, password } = req.body;
        const exist = await userModel.findOne({ email });
        const checkPass = await bcrypt.compare(password, exist.password);
        if (exist) {

            if (checkPass) {
                const userObj = {
                    name: exist.name,
                    email: exist.email,
                    role: exist.role
                }
                const token = jwt.sign(userObj, secretToken, { expiresIn: "1h" });
                res.status(201).json({ user: userObj, token });
            }
            else {
                res.status(403).send({ accessDenied: "Password Incorrect" });
            }
        }
        else {
            res.status(401).send({ message: "User not found" });
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "Something went wrong" });
    }

})


