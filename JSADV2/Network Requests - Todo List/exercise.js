const axios = require('axios');

async function fetchTodos() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return response.data;
  } catch (error) {
    console.error('Error fetching Todos:', error.message);
    throw error; 
  }
}

async function displayTodos() {
  try {
    const todos = await fetchTodos();
    console.log('Todos:', todos);
  } catch (error) {
    console.error('Error displaying Todos:', error.message);
  }
}


displayTodos();