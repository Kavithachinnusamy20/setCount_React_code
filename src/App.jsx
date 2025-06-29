import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // const handleInputChange = (event) => {
  //  setInputValue(event.target.value);
  // };
 const increase = () =>{
   setCount(count + 1);
 }
  const decrease = () =>{
   setCount(count - 1);
 }
   const setToZreo = () =>{
   setCount (0);
 }
 
  return (
    <div className="App">
      <button onClick ={increase}>Increase</button><br></br>
      <button onClick ={decrease}>Decrease</button><br></br>
      <button onClick ={setToZreo}>Set To Zero</button><br></br>
           {count}
    </div> 

  );
}

export default App;
 