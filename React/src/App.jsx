import React from 'react';
import Clock from './Components/Clock';
import LanguageWrapper from './Components/language-wrapper';

const App = () => {
  return (
    <LanguageWrapper>
      <AppContent />
    </LanguageWrapper>
  );
};

const AppContent = () => {
  return (
    <div>
      <Clock />
    </div>
  );
};

export default App;
