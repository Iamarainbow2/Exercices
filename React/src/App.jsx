<<<<<<< HEAD
import { LanguageContext } from "./Components/LanguageContext";
import { useState } from "react";
import Clock from "./Components/Clock";

const App = () => {
	
  const [language, setLanguage] = useState('en')
	return (
		
			<LanguageContext.Provider value={language}>
				<Clock />
			</LanguageContext.Provider>
		
	);
};

export default App;
=======

import LanguageWrapper from './Components/LanguageWrapper';
import Clock from './Components/Clock';

const App = () => {
  return (
    <LanguageWrapper>
      <Clock />
    </LanguageWrapper>
  );
};

export default App;
>>>>>>> d3fd2d4bc709940133197edb413155effd0f00e7
