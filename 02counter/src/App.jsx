import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter,setCounter] =useState(15)

  // let counter = 5

  const addValue = () => {
    console.log("value added" , counter);
    // counter +1;
    setCounter(prevcounter => prevcounter+1)
    setCounter(prevcounter => prevcounter+1)
    setCounter(prevcounter => prevcounter+1)
  }
  const decValue = ()=>{
    if(counter <=0)
      counter =2
    setCounter(counter -1);
  }

  return (
    <>
     <h1>hello world</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}
     >Add value: {counter}</button>
     <br />
     <button onClick={decValue}>Decrease value</button>
    </>
  )
}

export default App
