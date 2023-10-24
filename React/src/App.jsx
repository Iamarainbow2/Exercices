import './App.css'

function App() {
  const hello = "Hello, World!"

  function add (a,b){
    const sum = a + b
    return <h2>{sum}</h2>
  }

  return (
    <>
      <h1>{hello}</h1>
      {add(1, 2)}
    </>
  )
}

export default App

