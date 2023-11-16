import React, { useState } from 'react';
import LanguageContext from './LanguageContext';

const LanguageWrapper = ({ children }) => {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageWrapper;
