
import './Container.css';

const Container = ({ title, children }) => {
  return (
    <div className="custom-container">
      {title && <h2 className="container-title">{title}</h2>}
      {children}
    </div>
  );
};

export default Container;
