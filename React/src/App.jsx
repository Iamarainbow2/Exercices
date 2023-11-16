import Counter from "./Components/Counter";

function App() {
    return (
      <div>
        <Counter decrementAmount={2} initialCount={0}/>
      </div>
    );
  }
  
  export default App;