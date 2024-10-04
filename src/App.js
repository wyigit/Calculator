import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react';
import './App.css';
const App = () => {

  const [input,setInput] = useState('');
  const [result,setResult] = useState('');

  const clearInput = () =>{
    setInput('');
    setResult('');
  }

  const handleClick = (value) =>{
    setInput(input + value)
  }

  const calculatorResult = () =>{
    try{
      setResult(eval(input).toString());
    }catch (error){
      setResult('error')
    }
  }

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly/>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">

      <button onClick={clearInput} className="gray">AC</button>
      <button onClick={() => handleClick('+/-')} className="gray">+/-</button>
      <button onClick={() => handleClick('%')} className="gray">%</button>
      <button onClick={() => handleClick('/')} className="orange">&divide;</button>

      <button onClick={() => handleClick('7')} className="gray">7</button>
      <button onClick={() => handleClick('8')} className="gray">8</button>
      <button onClick={() => handleClick('9')} className="gray">9</button>
      <button onClick={() => handleClick('*')} className="orange">&times;</button>

      <button onClick={() => handleClick('4')} className="gray">4</button>
      <button onClick={() => handleClick('5')} className="gray">5</button>
      <button onClick={() => handleClick('6')} className="gray">6</button>
      <button onClick={() => handleClick('-')} className="orange">&minus;</button>

      <button onClick={() => handleClick('1')} className="gray">1</button>
      <button onClick={() => handleClick('2')} className="gray">2</button>
      <button onClick={() => handleClick('3')} className="gray">3</button>
      <button onClick={() => handleClick('+')} className="orange">+</button>

      {}

      <button className="gray">
        <FontAwesomeIcon icon={faCalculator}/>
      </button>

      <button onClick={() => handleClick('0')} className="gray">0</button>
      <button onClick={() => handleClick('.')} className="gray">.</button>
      <button onClick={calculatorResult} className="orange">=</button>


      </div>








    </div>
  )
}

export default App
