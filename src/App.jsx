import { useState } from "react";

function App() {
  let [counter, setcounter] = useState(0);

  const addValue = () =>{
    setcounter( counter =>{
      if(counter<20){
        return counter+1;
      }else{
        return counter;
      }
    });
  }
  const removeValue = () =>{
    setcounter( counter =>{
      if(counter>0){
        return counter-1;
      }else{
        return counter;
      }
    });
  }
  const reset = () =>{
    setcounter(counter = 0);
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter (0-20): {counter}</h2>
      <button onClick={addValue}>Increase Value</button>
      <button onClick={removeValue}>Decrease Value</button>
      <button onClick={reset}>Reset All</button>
    </>
  )
}

export default App
