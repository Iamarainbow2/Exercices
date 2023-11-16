
import Age from "./Age";

function Welcome(props) {

  const { firstName = 'Guest' ,age} = props;

    return (
      <>
        <h2>Welcome, {firstName}!</h2>
       
        {age > 18 ? <Age age={age}/> : <p>You are not 18 or older</p>}
      </>
    )
    }
  
  export default Welcome