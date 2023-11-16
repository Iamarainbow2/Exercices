

function UncontrolledLogin({ onLogin }) {
  const handleLoginClick = (event) => {
    event.preventDefault();
    //FormData API advantages: Easy to Use because it is tailored for Forms, Dynamic Handling, Supports File Uploads, It works on all browsers without problem.
    //Disadvantages: Limited for Form Elements, No Auto Serial, Not Good for JSON data, we should use Usestate with it too.

    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');
    const rememberMe = formData.get('rememberMe') === 'on'; 
    onLogin({ username, password, rememberMe });
  };

  console.log('Username:', username);
  console.log('Password:', password);

  const handleResetClick = () => {
  };

  return (
    <form onSubmit={handleLoginClick}>
      <label>
        Username:
        <input type="text" name="username" />
      </label>

      <br />

      <label>
        Password:
        <input type="password" name="password" />
      </label>

      <br />

      <label>
        Remember me:
        <input type="checkbox" name="rememberMe" />
      </label>

      <br />

      <button type="submit">
        Login
      </button>

      <button type="button" onClick={handleResetClick}>
        Reset
      </button>
    </form>
  );
}

export default UncontrolledLogin;
