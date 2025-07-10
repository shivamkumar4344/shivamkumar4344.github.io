import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import cors from "cors"

dotenv.config();
const SECRET = process.env.SECRET;
const app = express();
app.use(cors())
app.use(express.json());
app.use(cors());
// app.use(express.static("public"));

const dbuser = encodeURIComponent(process.env.DBUSER);
const dbpass = encodeURIComponent(process.env.DBPASS);

mongoose.connect(`mongodb://localhost:27017/merncafe`).then(() => {
  app.listen(3300, () => {
    console.log("Server started");
  });
});

// mongoose
//   .connect(
//     `mongodb+srv://${dbuser}:${dbpass}@cluster0.qjxhv.mongodb.net/merncafe?retryWrites=true&w=majority&appName=Cluster0`
//   )
//   .then(() => {
//     app.listen(8080, () => {
//       console.log("Server started");
//     });
//   });

app.use("/api/users", userRouter);
