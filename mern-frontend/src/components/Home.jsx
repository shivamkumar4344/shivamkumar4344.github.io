// export default function Home({age})
// {
    
//         return age > 18 ? <h1 style={{color:"green"}}>Welcome</h1> : <h2 style={{color:"red"}}>Access Denied</h2>
    
// }

// import { useState } from "react";
// export default function Home()
// {
//     const [score,setScore] = useState(0);
//     const Increment = ()=>{
//         setScore(score+1);
//     }
//     const decrement = ()=>{
//         if(score <= 0){
//             alert("cannot decrement score less than 0") 
//             setScore(0);
//         } else {
//             setScore(score-1);
//         }
//     }
//     return(
//         <>
//         <p>{score}</p>
//         <button onClick={Increment}>Increment</button>
//         <button onClick={decrement}>Decrement</button>
//         </>
//     )
// }

import { useState } from "react";
export default function Home()
{
    const [run,setRun] = useState(0);
    const [wicket,setWicket] = useState(0);
    const[message,setMessage] = useState("");
    const IncrementRun = ()=>{
        if(wicket == 10){
            setMessage("Game Over!!")
        }
        else{
            setRun(run+1);
            setMessage("Well Done");
        }
    }
    const IncremetWicket = () =>{
        if(wicket <= 9)
        {
        setWicket(wicket+1);
        setMessage("Better luck next time")

        }
        else{
            setMessage("Game Over!!")
        }
    }
    return(
        <>
        <button onClick={IncrementRun}>Run</button>
        <p>{run}</p>
        <button onClick={IncremetWicket}>Wicket</button>
        <p>{wicket}</p>
        <div style={{border:"2px solid black",width:"100px",}}>
            {message}
        </div>
        </>
    )
}