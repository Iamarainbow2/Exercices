import React from 'react';

const LanguageContext = React.createContext({
  language: 'en',
  setLanguage: (language) => {},
});

export default LanguageContext;
