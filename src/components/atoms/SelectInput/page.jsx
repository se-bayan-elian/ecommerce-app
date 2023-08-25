import { StyledSelect, StyledSelectInputContainer } from '@/components/templates/StyledComponents';
import React from 'react';

const SelectInput = ({ className, options, value, onChange }) => {
  return (
    <StyledSelectInputContainer className={className}>
      <StyledSelect value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
              {option.label}
          </option>
        ))}
      </StyledSelect>
    </StyledSelectInputContainer>
  );
};

export default SelectInput;
