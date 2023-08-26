import React from 'react';
import Input from './style';

const TextInput = ({ type , placeholder, className}) => {
  return (
      <Input
        type={type}
        placeholder={placeholder}
        className={className}
      />
  );
};

export default TextInput;