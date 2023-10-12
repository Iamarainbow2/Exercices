
function printName() { 
    
    const helloName = "Hello John";
    
    function inner() {
        console.log(helloName);
    }
    return inner;
}
const hello = printName();
hello();