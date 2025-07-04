//password hasing using bcrypt.js if we are using type:"module" then we use await without async .. and we have to do import for import otherwise we can use require..


import bcrypt from "bcrypt";
const pass = "pass12344";

const hashedPass = await bcrypt.hash(pass,10);
console.log(hashedPass);


const check = await bcrypt.compare("pass2344",hashedPass);
console.log(check);
