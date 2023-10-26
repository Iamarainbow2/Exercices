import React from "react";


export default function Dashboard() {

    return (
        <div>
            <h2>Dashboard</h2>
            {userName ? <p>Welcome, {userName}!</p> : <p>Please log in to see your dashboard</p>}
        </div>
    )
}