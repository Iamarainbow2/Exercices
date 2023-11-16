import { useState } from 'react';
import CounterDisplay from './CounterDisplay';

function Counter(props) {
    const {initial, increment} = props
  const [counter, setCounter] = useState(initial);

// When using UseState we dont wanna manipulate the value directly, that is why we use UseState. The best practice is using the setter function and if we need the old value we should use an arrow function with oldvalue ((prevCounter) => prevCounter + 1).
  const handleIncrease = () => {
    setCounter(counter + increment);
  };

  return (
    <div>
      <CounterDisplay count={counter} />  
      <button onClick={handleIncrease}>Increment</button>
    </div>
  );
}

export default Counter;
