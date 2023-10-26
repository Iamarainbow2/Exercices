import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState('');

    const navigate = useNavigate();

    const handleSubmit = () => {
    
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    const emailExists = existingUsers.some((user) => user.email === email);
    
    if (!emailExists && email && password && name) {
      setIsLoggedIn('true');
      existingUsers.push({ email, password, name, isLoggedIn });
      localStorage.setItem('users', JSON.stringify(existingUsers));

      
      navigate('/dashboard');
    } else {
      
      alert("Registration failed. Please check your input or email already exists.");
    
  }

    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <input type="mail" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <button type="submit">Register</button>
            <button>{<Link to="/">Login</Link>}</button>
        </form >
    )
}