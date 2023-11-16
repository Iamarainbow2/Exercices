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