

function MouseClicker({ name }) {
  
  const handleClick = (event) => {
    //My APP does not print buttons name when image is clickled. If you click image console logs image containers name if you click button you get buttons name

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
          name="image"
          style={{ width: '50px', height: '50px', marginLeft: '10px' }}
        />
      </button>
    </div>
  );
}

export default MouseClicker;
