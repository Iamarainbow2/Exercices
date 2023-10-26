import React from "react";
import {Link} from "react-router-dom"


export default function Dashboard() {
    const users = JSON.parse(localStorage.getItem('users'));
    const loggedUser = users?.map((user)=> user.isLoggedIn)
    console.log(users)
    const userName = loggedUser ? loggedUser.name : null;
    return (
        <div>
            <h2>Dashboard</h2>
            {userName ? <p>Welcome, {userName}!</p> : <p>Please <Link to="/">Log in</Link>to see your dashboard</p>}
        </div>
    )
}