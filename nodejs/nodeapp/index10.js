import jwt from "jsonwebtoken";
const SECRET = "something";

const user = {
    name:"John",
    email:"john@gmail.com",
    role:"admin"
}

const token = jwt.sign(user,SECRET,{expiresIn:"1h"});
console.log(token);

const verification = jwt.verify(token,SECRET);
console.log(verification);