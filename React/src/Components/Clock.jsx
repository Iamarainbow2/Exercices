<<<<<<< HEAD
import { useContext } from 'react'
import { LanguageContext } from './LanguageContext'



const Clock = () => {

  const language = useContext(LanguageContext)

  return (
    <div className="clock">
      <div>Clock</div>
      <div>{language}</div>
=======
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
>>>>>>> d3fd2d4bc709940133197edb413155effd0f00e7
    </div>
  )
}

export default Clock