import React, { useState } from 'react';
import { StyledSelect } from './style';

const FormSelect = () => {
  const [selectedOption, setSelectedOption] = useState('PCS');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <StyledSelect>
    <select value={selectedOption} onChange={handleChange}>
      <option value="PCS">PCS</option>
      <option value="Good">Good</option>
      <option value="Bad">Bad</option>
    </select>
    </StyledSelect>
  );
};

export default FormSelect;
