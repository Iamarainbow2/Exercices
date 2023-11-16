

function MouseClicker({ name }) {
  
  const handleClick = (event) => {
    
    const buttonName = event.target.name || event.target.parentElement?.name;
    if (buttonName) {
      console.log(`Element ${buttonName} clicked!`);
    }
  };

  return (
    <div>
      <button name={name} onClick={handleClick}>
        Click me!
        <img
          src="https://coursereport-production.imgix.net/uploads/school/logo/1247/original/glifo_develhope.jpeg?w=72&h=72"
          name='image'
          alt="Button Image"
          style={{ width: '50px', height: '50px', marginLeft: '10px' }}
        />
      </button>
    </div>
  );
}

export default MouseClicker;
