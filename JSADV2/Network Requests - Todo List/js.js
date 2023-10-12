


async function getData () {
    const todoList= await fetch("https://jsonplaceholder.typicode.com/todos", )
    .then(response => {
        console.log(response.ok);
        return response.json()})
    .then(data => data);
    return todoList;
}




async function render () {
    const data = await getData();
    console.log(data[98]);
}

render();