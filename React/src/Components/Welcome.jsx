


function Welcome(props) {

  const { firstName = 'Guest' ,age} = props;

    return (
      <>
        <h2>Welcome, {firstName}!</h2>
        <p>Your age is {age}</p>
      </>
    )
    }
  
  export default Welcome