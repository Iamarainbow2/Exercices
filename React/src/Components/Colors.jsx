
import Color from "./Color";

function Colors({ items }) {
  return <ul>{items.map((color) => <Color key={color.id} {...color} />)}</ul>;
}

export default Colors;
