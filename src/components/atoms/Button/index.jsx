import React from 'react';
import { StyledButton } from './style';

const Button = ({ children, variant, ...props }) => {
  // text => 
  
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
