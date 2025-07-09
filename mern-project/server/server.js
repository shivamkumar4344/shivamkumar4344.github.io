import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
//const dbconnection = `mongodb://${dbsuer}:${dbpass}`
dotenv.config();
const dbhost = process.env.DBCONNECT
const dbuser = process.env.DBUSER
const dbpass = process.env.DBPASS
const app = express();
const port = process.env.PORT || 3300;
app.use(express.json());

mongoose.connect(dbhost).then(() => {
    app.listen(port, () => {
        console.log("MongoDB Connected");
        console.log(`Server started on port ${port}`);
    });
});






