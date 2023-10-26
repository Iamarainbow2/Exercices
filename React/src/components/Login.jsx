import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";



export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setUserName] = useState('');


    const handleSubmit = () => {
        e.preventDefault();
        const storedEmail = localStorage.setItem('userEmail', email);
        const storedPassword = localStorage.setItem('userPassword', password);
        const storedName = localStorage.setItem('userName', name);
        
        if (email && email === storedEmail && password === storedPassword) {
            setUserName(storedName);
            navigate('/dashboard');
        } else {
          
          alert("Login failed. Please check your E-mail or Password.");
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label htmlFor="mail">E-Mail :</label>
                <input type="mail" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Password :</label>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
            <button>{<Link to="/register">Dont have an account Register here!</Link>}</button>
        </>            
    )
}