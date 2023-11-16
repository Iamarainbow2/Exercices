
import Age from "./Age";

function Welcome(props) {

  const { firstName = 'Guest' ,age} = props;

    return (
      <>
        <h2>Welcome, {firstName}!</h2>
       {age && <Age age={age}/>}
      </>
    )
    }
  
  export default Welcome