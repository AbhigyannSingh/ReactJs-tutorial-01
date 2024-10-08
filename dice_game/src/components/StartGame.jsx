import React from 'react';
import './StartGamee.css';

const StartGame = ({toggle})=>{
    return(
        <div className="Container">
            <div>
                <img src="/images/dices.png" alt="" />
            </div>
            <div className='SmallContainer'>
                <h1>Dice Game</h1>
                <button onClick={toggle}>Play Now</button>
            </div>
        </div>
    )
};

export default StartGame;