
import  { useState } from 'react';
import './Container.css';

const Container = ({ title, children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`custom-container ${collapsed ? 'collapsed' : ''}`}>
      {title && (
        <h2 className="container-title" onClick={handleToggleCollapse}>
          {title}
        </h2>
      )}
      {!collapsed && children}
    </div>
  );
};

export default Container;
