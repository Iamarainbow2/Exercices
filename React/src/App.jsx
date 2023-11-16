import UncontrolledLogin from "./Components/UncontrolledLogin";

function App() {
  const handleLogin = (userData) => {
    console.log('Logging in with:', userData);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <UncontrolledLogin onLogin={handleLogin} />
    </div>
  );
}

export default App;
