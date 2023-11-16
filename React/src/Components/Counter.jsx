import React, { useState, useEffect, useRef } from 'react';

function Counter({ initialValue }) {
  const [counter, setCounter] = useState(initialValue);
  const directionRef = useRef('none'); 

  useEffect(() => {
    
    if (counter > initialValue) {
      directionRef.current = 'up';
    } else if (counter < initialValue) {
      directionRef.current = 'down';
    } else {
      directionRef.current = 'none'; 
    }

    if (directionRef.current !== 'none') {
      console.log(`Direction: ${directionRef.current}`);
    }
  }, [counter, initialValue]);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
