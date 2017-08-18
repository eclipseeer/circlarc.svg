import React from 'react';

const ButtonScale = ({ className, icon, onClick, title }) => (
  <button className={`container-${className}`} onClick={onClick} title={title}>
    {icon}
  </button>
);

export default ButtonScale;
