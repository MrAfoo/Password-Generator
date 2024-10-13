import './App.css';
import React, { useState } from 'react';
import { LC, NC, SC, UC } from './data/PassChar';

function App() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbol, setSymbol] = useState(false);
  let [passwordlen, setPasswordlen] = useState(10);
  let [fpass, setFpass] = useState('');

  let createPassword = () => {
    let finalPas = '';
    let charSet = '';
    if (uppercase || lowercase || number || symbol) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (number) charSet += NC;
      if (symbol) charSet += SC;
      for (let i = 0; i < passwordlen; i++) {
        finalPas += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      setFpass(finalPas);
    } else {
      alert('Please select one CheckBox!.....')
    }
  };

  let copyPass = () => {
    navigator.clipboard.writeText(fpass);
    alert('Password copied successfully.')
  };

  return (
    <>
     <div className='passwordBox'>
        <h2>Password Generator</h2>

        <div className='passwordBoxin'>
          <input type='text' value={fpass} readOnly /> <button onClick={copyPass}>Copy</button>
        </div>

        <div className='passLength'>
          <label>Password Length</label>
          <input type='number' max={20} min={10} value={passwordlen} onChange={(event) => setPasswordlen(event.target.value)} />
        </div>

        <div className='passLength'>
          <label>Include Uppercase Letters</label>
          <input type='checkbox' checked={uppercase} onChange={() => setUppercase(!uppercase)} />
        </div>

        <div className='passLength'>
          <label>Include Lowercase Letters</label>
          <input type='checkbox' checked={lowercase} onChange={() => setLowercase(!lowercase)} />
        </div>

        <div className='passLength'>
          <label>Include Numbers</label>
          <input type='checkbox' checked={number} onChange={() => setNumber(!number)} />
        </div>

        <div className='passLength'>
          <label>Include Symbols</label>
          <input type='checkbox' checked={symbol} onChange={() => setSymbol(!symbol)} />
        </div>
        <button className='btn' onClick={createPassword}>Generate Password</button>
      </div>
    </>
  );
}

export default App;
