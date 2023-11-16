import React from 'react';
import FilteredList from './Components/FilteredList';
const App = () => {
  const list = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 16 },
    { id: 3, name: 'Charlie', age: 32 },
    { id: 4, name: 'David', age: 19 },
    { id: 5, name: 'Emily', age: 21 },
  ];

  return (
    <div>
      <h1>Filtered List</h1>
      <FilteredList list={list} />
    </div>
  );
};

export default App;
