import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";



export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setUserName] = useState('');


    const handleLogin = () => {
        const storedEmail = localStorage.setItem('userEmail', email);
        const storedPassword = localStorage.setItem('userPassword', password);
        const storedName = localStorage.setItem('userName', name);

        if (email === storedEmail && password === storedPassword) {
            setUserName(storedName);
        }
    }
    return(
        <div>
            <h2>Login</h2>
            <input type="mail" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <button>{<Link to="/register">Register</Link>}</button>
        </div>
    )
}