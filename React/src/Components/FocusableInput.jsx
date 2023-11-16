import { useEffect, useRef } from 'react';

function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []); 

  return (
    <input
      type="text"
      ref={inputRef}
      placeholder="Type something..."
    />
  );
}

export default FocusableInput;
