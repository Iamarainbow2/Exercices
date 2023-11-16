import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './LanguageContext';

const LanguageWrapper = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageProvider value={{ language, changeLanguage: handleLanguageChange }}>
      <div>
        <LanguageButtons />
        {children}
      </div>
    </LanguageProvider>
  );
};

const LanguageButtons = () => {
  const { changeLanguage } = useLanguage();

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>ENG</button>
      <button onClick={() => changeLanguage('it')}>IT</button>
    </div>
  );
};

export default LanguageWrapper;
