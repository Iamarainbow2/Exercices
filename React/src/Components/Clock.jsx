import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';
const Clock = () => {
  const { language } = useContext(LanguageContext);
  const time = new Date().toLocaleTimeString(language);

  return (
    <div>
      <p>Current time: {time}</p>
    </div>
  );
};

export default Clock;
