import React, { useState } from 'react'
import './App.css'

export const App = () => {
  const [result, setResult] = useState("");

  const handClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const clear = () => {
    setResult("");
  }
  const back = () => {
    setResult(result.slice(0,result.length-1)); 
  }
  const calculate = () =>{
    try{
      setResult(eval(result).toString());
    }
    catch(err){
      setResult("Error!");
    }
  }
  return (
      <>
        <div className='container'>
          <form>
            <input placeholder='Calculate here...' type='text' value={result} />
          </form>
          <div className="keypad">
            <button name = "7" onClick = {handClick}>7</button>
            <button name = "8" onClick = {handClick}>8</button>
            <button name = "9" onClick = {handClick}>9</button>
            <button className='highlight' name = "*" onClick = {handClick}>X</button>
            <button name = "4" onClick = {handClick}>4</button>
            <button name = "5" onClick = {handClick}>5</button>
            <button name = "6" onClick = {handClick}>6</button>
            <button className='highlight' name = "/" onClick = {handClick}>&divide;</button>
            <button name = "1" onClick = {handClick}>1</button>
            <button name = "2" onClick = {handClick}>2</button>
            <button name = "3" onClick = {handClick}>3</button>
            <button className='highlight' name = "+" onClick = {handClick}>+</button>
            <button  id='back' onClick = {back}>C</button>
            <button name = "0" onClick = {handClick}>0</button>
            <button name = "." onClick = {handClick}>.</button>
            <button className='highlight' name = "-" onClick = {handClick}>-</button>
            <button id='clear' onClick = {clear}>AC</button>
            <button id='calc' onClick = {calculate}>=</button>
          </div>
        </div>
        <h3 id='colr'>@anandkr369</h3>
      </>
  )
}
export default App
