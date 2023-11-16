


function Welcome(props) {

  const { firstName = 'Guest' } = props;

    return (
      <>
        <h2>Welcome, {firstName}!</h2>
      </>
    )
    }
  
  export default Welcome