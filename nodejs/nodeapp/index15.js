import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/lpu").then(()=>{
    app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
})

app.use(express.json());

const studentSchema = mongoose.Schema({
    name:{type:String}
})

const studentModel = mongoose.model("Student",studentSchema);

app.post('/save', async(req, res) => {
    try{
    const {name} = req.body;
    const result = await studentModel.create({name})
    res.status(201).json(result);
    }catch(err)
    {
        res.status(401).send({message:"Error"});
        console.log(err);
    }
    
});

