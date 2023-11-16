
import React from 'react';
import useCounter from './Components/useCounter';
const CounterComponent = () => {
  const { count, increment, decrement, reset } = useCounter(0);

const App = () => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterComponent;
