

function UncontrolledLogin({ onLogin }) {
  const handleLoginClick = (event) => {
    event.preventDefault();
    //For Standart APIs Using formData with event.target
    //For Unstandart APIs  direct Access to elements like event.target.elements.username.value 
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');
    const rememberMe = formData.get('rememberMe') === 'on'; 
    onLogin({ username, password, rememberMe });
  };

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
