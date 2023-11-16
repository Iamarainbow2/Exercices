import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);


  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>Counter Value: {counter}</h2>
      <button onClick={handleIncrease}>Increment</button>
    </div>
  );
}

export default Counter;
