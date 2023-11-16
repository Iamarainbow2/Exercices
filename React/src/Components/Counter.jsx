import React, { useState } from 'react';
import CounterDisplay from './CounterDisplay';

function Counter({ initialCount, decrementAmount }) {
  
  const [counter, setCounter] = useState(initialCount);

  
  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  
  const handleDecrement = () => {
    setCounter((prevCounter) => prevCounter - decrementAmount);
  };

  
  const handleReset = () => {
    setCounter(initialCount);
  };

  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
