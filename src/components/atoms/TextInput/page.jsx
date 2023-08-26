import React from 'react';

const TextInput = ({ type , placeholder, className}) => {
  return (
      <input
        type={type}
        placeholder={placeholder}
        className={className}
      />
  );
};

export default TextInput;