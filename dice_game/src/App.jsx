import { useState } from 'react'

import './App.css'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay'

function App() {

  const [isGameStarted, setGameStarted] = useState(true)

  const toggleGamePlay = () =>{
    setGameStarted((prev) => !prev)
  }

  return (
    <div>
      {isGameStarted ? <GamePlay/> : <StartGame  toggle = {toggleGamePlay}/>}
    </div>
  )
}

export default App
