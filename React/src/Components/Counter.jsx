import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

// When using UseState we dont wanna manipulate the value directly, that is why we use UseState. The best practice is using the setter function and if we need the old value we should use an arrow function with oldvalue.
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
