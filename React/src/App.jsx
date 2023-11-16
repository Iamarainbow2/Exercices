import Login from "./components/Login";

function App() {
  const handleLogin = (userData) => {
    console.log('Logging in with:', userData);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;
