import React from "react";

export default function Hello() {
    function sayHello() {
        return(
            <h2>Hello,World!</h2>
        )
    }
    return (
        <>
        <div>{sayHello()}</div>
        </>
    )
}