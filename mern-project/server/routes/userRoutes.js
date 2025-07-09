import express from "express";
import { authenticate,authorize } from "./auth";
const Router = express.Router();
import { register,userDelete,loginUser,getUser,updateUser } from "../controllers/userController.js";

app.use("/api/users",userRouter);

Router.post('/register',register);

Router.get("/users", authenticate, authorize("admin"),getUser);

Router.post("/login",loginUser);

Router.patch('/:id',authenticate, authorize("admin"),updateUser)

Router.delete('/:id',authenticate, authorize("admin"),userDelete);
export default Router