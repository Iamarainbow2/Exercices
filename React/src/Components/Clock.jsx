
import { useState, useEffect } from 'react';
import './Clock.scss';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock-container">
      <h2>Current Time:</h2>
      <p>{time.toLocaleTimeString()}</p>
      <button onClick={() => alert('Button clicked')}>Click me</button>
    </div>
  );
}

export default Clock;
