import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel";

const register = async (req, res) => {
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

};


const updateUser = async(req,res)=>{
    try{
    const id = req.params.id;
    const body = req.body;
    const result = await userModel.findByIdAndUpdate(id,body);
    res.status(200).json(result);
    }catch(err){
        res.status(400).send({message:"Something went wrong"});
        console.log(err);
    }

}

const deleteUser = async(req,res)=>{
    try{
        const id = req.params.id;
        const result = await userModel.findByIdAndDelete(id);
        res.status(200).json(result);

    }catch(err)
    {
        res.status(400).json({message:"Not deleted"});
        console.log(err);
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const exist = await userModel.findOne({ email });

        
        if (exist) {
            const checkPass = await bcrypt.compare(password, exist.password);

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

}

const getUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const exist = await userModel.findOne({ email });

        
        if (exist) {
            const checkPass = await bcrypt.compare(password, exist.password);

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

}

export {register,updateUser,getUser,loginUser,deleteUser};
