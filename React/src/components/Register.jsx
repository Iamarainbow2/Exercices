import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    name: '',
    isLoggedIn: false
  })

  console.log(user)
  function handleChange(e) {
    const { name, value } = e.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      }
    })
  }

  const navigate = useNavigate();

  const handleSubmit = () => {

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const emailExists = existingUsers.some((item) => item.email === user.email);

    if (!emailExists) {
      existingUsers.push({...user, isLoggedIn: true});
      localStorage.setItem('users', JSON.stringify(existingUsers));
      
      navigate('/dashboard')
    } else {

      alert("Registration failed. Please check your input or email already exists.");

    }

  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <input name="email" required type="email" placeholder="Email" value={user.email} onChange={handleChange} />
      <input name="password" required type="password" placeholder="Password" value={user.password} onChange={handleChange} />
      <input name="name" required type="text" placeholder="Name" value={user.name} onChange={handleChange} />
      <button type="submit">Register</button>
      <button>{<Link to="/">Login</Link>}</button>
    </form >
  )
}