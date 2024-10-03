import React from 'react'
import './GamePlayy.css';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import RoleDice from './RoleDice';

function GamePlay() {
  return (
    <div className="game-play">
    <div className='main'>
       <TotalScore />
       <NumberSelector />
       
    </div>
    <RoleDice />
    </div>
    
  )
}

export default GamePlay