import React, { useState } from 'react';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const FibonacciGenerator = () => {
  const [hour, setHour] = useState('');
  const [fibonacciSeries, setFibonacciSeries] = useState([]);

  const handleInputChange = (e) => {
    setHour(e.target.value);
  };

  const generateFibonacciSeries = (minuteSeed, totalNumbers) => {
    let fibSeries = [minuteSeed, minuteSeed + 1];

    for (let i = 2; i < totalNumbers; i++) {
      fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }

    return fibSeries;
  };

  const handleGenerateClick = () => {
    let now = new Date();
    let minutes, seconds;

    if (hour) {
      let timeParts = hour.split(':');
      
      if (timeParts.length === 3) {
        minutes = parseInt(timeParts[1], 10);
        seconds = parseInt(timeParts[2], 10);     
      } else {
        alert('Please enter a valid time in the format HH:MM:SS');
        return;
      }
    } else {
      minutes = now.getMinutes();
      seconds = now.getSeconds();
    }

    const fibSeries = generateFibonacciSeries(minutes, seconds);
    setFibonacciSeries(fibSeries);
  };

  return (
    <div>
      <h1>Fibonacci Series Generator</h1>
      <div>
        <label>Ingresa la hora (HH:MM:SS):</label>
        <input type="text" value={hour} onChange={handleInputChange} placeholder="HH:MM:SS" />
      </div>
      <button onClick={handleGenerateClick}>Generate Fibonacci Series</button>
      <div>
        <h2>Fibonacci Series:</h2>
        <p>{fibonacciSeries.join(', ')}</p>
      </div>
    </div>
  );
};

export default FibonacciGenerator;
