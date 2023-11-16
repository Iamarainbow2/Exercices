

function MouseClicker({ name }) {
  
  const handleClick = (e) => {
    
    console.log(`Button ${e.target.name} clicked!`);
  };

  return (
    <div>
      <button name={name} onClick={handleClick}>
        Click me!
      </button>
    </div>
  );
}

export default MouseClicker;
