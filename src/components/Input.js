import React from 'react';

const Input = ({ name, value, defaultValue, onChange, storeName, title }) => (
  <div className={`input-data input-data-${storeName}`}>
    <p>{name}</p>
    <div className="input-wrapper">
      <input
        className="input"
        type="number"
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        title={title}
      />
      <hr className="input-underline-1" />
      <hr className="input-underline-2" />
    </div>
  </div>
);

export default Input;
