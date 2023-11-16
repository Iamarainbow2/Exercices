

import { useState } from 'react';
import styles from './TodoList.module.scss'; 

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

  const removeItem = (index) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };

  return (
    <div className={styles['todo-container']}>
      <h2>Todo List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={styles['todo-item']}>
            {item}
            <button className={styles['remove-button']} onClick={() => removeItem(index)}>
              Remove
            </button>
          </li>
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
