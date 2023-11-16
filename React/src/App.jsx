
import useFormInput from "./Components/useFormInput";
const LoginForm = () => {
  const { inputs, handleInputChange } = useFormInput();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Form submitted with:', inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={inputs.username}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={inputs.password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
