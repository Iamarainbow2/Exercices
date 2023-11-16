function Age(props) {

    const {age} = props;
  
      return (
        <>
          {age > 18 ? <p>Your age is {age}</p> : <p>You are not 18 or older</p>}
        </>
      )
      }
    
    export default Age