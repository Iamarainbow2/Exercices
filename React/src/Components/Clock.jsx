import React, { useState, useEffect } from 'react';

function Clock() {
  
  const [currentTime, setCurrentTime] = useState(new Date());

  
  useEffect(() => {
    
    const updateTime = () => {
      setCurrentTime(new Date());
    };

   
    const intervalId = setInterval(updateTime, 1000);

   
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div>
      <h2>Current Time: {currentTime.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;