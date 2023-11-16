import { useState } from 'react';

function TodoList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems((prevItems) => [...prevItems, newItem]);
      setNewItem('');
    }
  };

  const resetItems = () => {
    setItems([]);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
        />
        <button onClick={addItem}>Add</button>
        <button onClick={resetItems}>Reset</button>
      </div>
    </div>
  );
}

export default TodoList;
