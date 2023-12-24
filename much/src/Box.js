import React, { useState, useEffect } from "react";
import './App.css'
const Box = () => {
  const [backgroundColor, setBackgroundColor] = useState('blue');

  const change = () => {
    const newColor = backgroundColor === 'blue' ? 'red' : 'blue';
    setBackgroundColor(newColor);

  }
  return (
    <div className="box">
      <div style={{
        width: '300px',
        height: '300px',
        backgroundColor: backgroundColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <button onClick={change}>change colour </button>

      </div>
    </div>
  )
}
export default Box;