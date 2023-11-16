

function Colors({ items }) {
  return (
    <ul>
      {items.map((color) => (
        <li key={color.id}>{color.name}</li>
      ))}
    </ul>
  );
}

export default Colors;
