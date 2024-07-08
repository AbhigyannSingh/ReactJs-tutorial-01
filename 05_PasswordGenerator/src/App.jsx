
import { useState, useCallback, useEffect } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")
  const passwordGenerator = useCallback(()=>{
    let pass =""
    let str ="QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm"
    if(number) str +="0123456789"
    if(character) str +="!@#$%^&*{}[]~"

    for (let i = 0; i <=length; i++) {
      let char = Math.floor(Math.random()* str.length+1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  },[length, number, character, password] )

  useEffect(()=>{
      passwordGenerator()
  },length, character, number, passwordGenerator )

  return (
   <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">      
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rouunded-lg overflow-hidden mb-4'>
        <input type="text" 
        value={password}
        className='outline-node w-full py-1 px-3'
        placeholder='Password'
        readOnly

        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6} 
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>setLength(e.target.value)}
          />
          <label >Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked = {number}
          id='numberInput'
          onChange={()=>{
            setNumber((prev) => !prev)
          }}/>
          <label htmlFor="number">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked = {character}
          id='characterInput'
          onChange={()=>{
            setCharacter((prev) => !prev)
          }}/>
          <label htmlFor="character">Characters</label>
        </div>

      </div>

    </div>
   </>
  )
}

export default App
