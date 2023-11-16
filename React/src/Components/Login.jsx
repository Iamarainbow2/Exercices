import { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleLoginClick = () => {
    onLogin({ username, password, rememberMe });
  };

  const handleResetClick = () => {
    setUsername('');
    setPassword('');
    setRememberMe(false);
  };

  const isLoginDisabled = !username || !password;

  return (
    <div>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
      </label>

      <br />

      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>

      <br />

      <label>
        Remember me:
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={handleRememberChange}
        />
      </label>

      <br />

      <button onClick={handleLoginClick} disabled={isLoginDisabled}>
        Login
      </button>

      <button onClick={handleResetClick}>
        Reset
      </button>
    </div>
  );
}

export default Login;
