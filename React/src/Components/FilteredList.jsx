import React, { useState, useMemo } from 'react';

const FilteredList = ({ list }) => {
  const [filteredList, setFilteredList] = useState([]);

  useMemo(() => {
    const filteredItems = list.filter((item) => item.age > 18);
    setFilteredList(filteredItems);
  }, [list]); // Filter list only when list changes

  return (
    <ul>
      {filteredList.map((item) => (
        <li key={item.id}>
          <p>Name: {item.name}</p>
          <p>Age: {item.age}</p>
        </li>
      ))}
    </ul>
  );
};

export default FilteredList;
