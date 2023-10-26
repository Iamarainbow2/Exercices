import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const navigate = useNavigate();

    const handleRegister = () => {
    
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    const emailExists = existingUsers.some((user) => user.email === email);

    if (!emailExists && email && password && name) {
      
      existingUsers.push({ email, password, name });
      localStorage.setItem('users', JSON.stringify(existingUsers));

      
      navigate.push('/login');
    } else {
      
      alert("Registration failed. Please check your input or email already exists.");
    
  }

    }
    return (
        <div>
            <h1>Register</h1>
            <input type="mail" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
            <button onClick={handleRegister}>Register</button>
            <button>{<Link to="/">Login</Link>}</button>
        </div>
    )
}