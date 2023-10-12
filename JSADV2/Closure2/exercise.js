function printName() { 
    
    const helloName = "Hello John";
    
    function inner() {
        setTimeout(() => {
            console.log(helloName);
        }, 1000); 
    }
    return inner;
}
const hello = printName();
hello();