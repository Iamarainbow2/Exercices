import { useState } from 'react';

const useFormInput = () => {
  const [inputs, setInputs] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  return {
    inputs,
    handleInputChange,
  };
};

export default useFormInput;
