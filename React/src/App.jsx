import AlertClock from "./Components/AlertClock";

function App() {
  const handleButtonClick = () => {
    const currentTime = new Date().toLocaleTimeString();
    alert(`Current time is: ${currentTime}`);
  };

  return (
    <div>
      <AlertClock onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;