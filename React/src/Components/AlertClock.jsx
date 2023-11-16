
function AlertClock() {
    const handleButtonClick = () => {
      const currentTime = new Date().toLocaleTimeString();
      alert(`Current time is: ${currentTime}`);
    };
  
    return (
      <div>
        <h2>Alert Clock</h2>
        <button onClick={handleButtonClick}>Show Current Time</button>
      </div>
    );
  }
  
  export default AlertClock;