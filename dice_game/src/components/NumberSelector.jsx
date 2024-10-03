import React, { useState } from 'react'
import './NumberSelector.css'

function NumberSelector() {

  const arrayNumber = [1,2,3,4,5,6];
  const [selectedNumber, setSelectedNumber] = useState()
  console.log(selectedNumber);
  

  return (
    <div className='mainn'>
      {
        arrayNumber.map((item, index) => (
          <div className = {`Box ${item === selectedNumber ?'selected' : ''}`}
           key={index} onClick={() => setSelectedNumber(item)}>{item}</div>
      ))
      }
      <p>Select Number</p>
      
    </div>
    
  )
}

export default NumberSelector