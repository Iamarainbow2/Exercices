
import Age from "./Age";

function Welcome(props) {

  const { firstName = 'Guest' ,age} = props;
  const shouldRenderAge = firstName === 'John' && age > 18 && age < 65;

    return (
      <>
        <h2>Welcome, {firstName}!</h2>
       
        {shouldRenderAge && <Age age={age}/>}
      </>
    )
    }
  
  export default Welcome