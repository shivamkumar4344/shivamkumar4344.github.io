//1st method

import { useState } from "react";
import axios from "axios";

export default function Register() {
    const [user, setUser] = useState({});
    const[error,setError] = useState();

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const url = "http://localhost:3300/api/users/register" //use vercel link here..
            const result = await axios.post(url,user);
            setError("Data saved successfully");

        }catch(err){
            console.log(err);
            setError("Something went wrong");
        }
    }

    return (
        <>
            <div className="form-container">
                <h1>Register Form</h1>
                <form>
                    {error}
                    <br /><br />
                    <label htmlFor="firstName">FirstName</label><br />
                    <input type="text" name="firstName" id="firstName" placeholder="Enter first name" onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                    <br /><br />

                    <label htmlFor="lastName">LastName</label><br />
                    <input type="text" name="lastName" id="lastName" placeholder="Enter last name"
                        onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                    <br /><br />

                    <label htmlFor="email">Email</label><br />
                    <input type="email" name="email" id="email" placeholder="Enter email"
                        onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    <br /><br />

                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password" id="password" placeholder="Enter password"
                        onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    <br /><br />
                    <button onClick={handleSubmit}>Sumbit</button>
                </form>
            </div>
        </>
    )
}




//2nd method...

// import { useState,useRef } from "react";

// export default function Register() {
    
//     const firstName = useRef()
//     const lastName = useRef()
//     const email = useRef()
//     const password = useRef()

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const user = {
//             firstName:firstName.current.value,
//             lastName:lastName.current.value,
//             email:email.current.value,
//             password:password.current.value
//         }
//         console.log(user)
//     }

//     return (
//         <>
//             <div className="form-container">
//                 <h1>Register Form</h1>
//                 <form>
//                     <label htmlFor="firstName">FirstName</label><br />
//                     <input type="text" name="firstName" id="firstName" placeholder="Enter first name" ref={firstName} />
//                     <br /><br />

//                     <label htmlFor="lastName">LastName</label><br />
//                     <input type="text" name="lastName" id="lastName" placeholder="Enter last name"
//                         ref={lastName} />
//                     <br /><br />

//                     <label htmlFor="email">Email</label><br />
//                     <input type="email" name="email" id="email" placeholder="Enter email"
//                         ref={email} />
//                     <br /><br />

//                     <label htmlFor="password">Password</label><br />
//                     <input type="password" name="password" id="password" placeholder="Enter password"
//                         ref={password} />
//                     <br /><br />
//                     <button onClick={handleSubmit}>Sumbit</button>
//                 </form>
//             </div>
//         </>
//     )
// }