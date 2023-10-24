import './App.css'

function App() {
  const hello = "Hello, World!"

  function greed (name){

    return <h1>Hello, {name}!</h1>
  }

  return (
    <>
      <h1>{hello}</h1>
      {greed()}
    </>
  )
}

export default App
