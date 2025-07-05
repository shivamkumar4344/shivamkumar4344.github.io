import dotenv from 'dotenv';
dotenv.config();
const dbUser = encodeURIComponent(process.env.DBUSER);
const dbPass = encodeURIComponent(process.env.DBPASS);

console.log(dbUser,dbPass);