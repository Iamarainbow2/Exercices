

function MultiButton() {
  
  const handleButtonClick = (event) => {
    console.log(`Button ${event.target.name} clicked!`);
  };

  return (
    <div>
      <button name="one" onClick={handleButtonClick}>
        Click me - One
      </button>
      <button name="two" onClick={handleButtonClick}>
        Click me - Two
      </button>
      <button name="three" onClick={handleButtonClick}>
        Click me - Three
      </button>
    </div>
  );
}

export default MultiButton;
