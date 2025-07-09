import Home from "./components/Home"
import Register from "./components/Register"
import "./App.css"

function App() {
  // let handleClick = ()=>{
  //   alert("Hello from click");
  // }

  // const handleSubmit=(name)=>{
  //   alert(`Hello ${name}`);
  // }
  // return (
  //   <>
  //     <div className="App-Container">
  //     <Home age={19}/>
  //     <h3>This is footer</h3>
  //     </div>
  //     <h1>MERN FRONTEND</h1>
  //     <button onClick={handleClick}>Click me</button>
  //     &nbsp;&nbsp;&nbsp;
  //     <button onClick={()=>handleSubmit("John")}>Submit</button>
  //   </>
  return(
    <>
      {/* <Home/> */}
      <Register/>
    </>
  )
  
}

export default App
