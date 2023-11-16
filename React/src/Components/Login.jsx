
import { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password.length >= 8) {
      onLogin({ username, password });
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button
        onClick={handleLogin}
        style={{
          backgroundColor: password.length < 8 ? 'red' : 'green',
          color: 'white',
          padding: '10px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;