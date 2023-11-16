

function MouseClicker({ name }) {
  
  const handleClick = (event) => {
    //image is in a upper z index than the button, click event handler only runs the most top element so that element will be the image not the button 

    const buttonName = event.target.name || event.target.src;
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
          alt="Button Image"
          style={{ width: '50px', height: '50px', marginLeft: '10px' }}
        />
      </button>
    </div>
  );
}

export default MouseClicker;
