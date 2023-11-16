import { useState } from 'react';
import Welcome from './Welcome';
function InteractiveWelcome() {
  
  const [inputValue, setInputValue] = useState('');

  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />

      <Welcome name={inputValue} />
    </div>
  );
}

export default InteractiveWelcome;
