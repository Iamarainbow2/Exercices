// Clock.jsx
import React, { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';

const Clock = () => {
  const { language } = useLanguage();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString(language);

  return (
    <div>
      <h2>Current Time:{formattedTime}</h2>
    </div>
  );
};

export default Clock;
