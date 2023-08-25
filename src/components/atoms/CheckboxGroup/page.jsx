import React from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.div`

`;

const StyledCheckbox = styled.input`

`;

const CheckboxGroup = ({ label, options, selectedOptions, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <CheckboxContainer>
        {options.map((option, index) => (
          <div key={index}>
            <label>
              <StyledCheckbox
                type="checkbox"
                value={option.value}
                checked={selectedOptions.includes(option.value)}
                onChange={onChange}
              />
              {option.label}
            </label>
          </div>
        ))}
      </CheckboxContainer>
    </div>
  );
};

export default CheckboxGroup;