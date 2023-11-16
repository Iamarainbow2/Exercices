import Colors from "./Components/Colors";

function App() {
  const colorList = ['Red', 'Green', 'Blue', 'Yellow'];

  return (
    <div>
      <h1>Color List</h1>
      <Colors items={colorList} />
    </div>
  );
}

export default App;
