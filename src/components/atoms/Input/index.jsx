import React from 'react';

const Input = ({ value, onChange, label }) => (
  <label>
    {label}:
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Input;
