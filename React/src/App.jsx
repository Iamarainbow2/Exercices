import React from 'react';
import useCounter from './Components/useCounter';

const App = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default App;
