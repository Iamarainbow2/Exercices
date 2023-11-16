import { useContext } from 'react'
import { LanguageContext } from './LanguageContext'



const Clock = () => {

  const language = useContext(LanguageContext)

  return (
    <div className="clock">
      <div>Clock</div>
      <div>{language}</div>
    </div>
  )
}

export default Clock