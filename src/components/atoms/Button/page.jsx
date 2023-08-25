import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  /* Default button styling */
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  
  ${(props) => props.style === 'primary' && `
    background-color: #007bff;
    color: white;
  `}
  
  ${(props) => props.style === 'secondary' && `
    background-color: #6c757d;
    color: white;
  `}
  
  ${(props) => props.style === 'warning' && `
    background-color: #ffc107;
    color: black;
  `}
  
  ${(props) => props.style === 'search' && `
    background: red;
    color: white;
  `}
`;

const Button = ({ text, style, onClick }) => {
  return (
    <StyledButton style={style} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;


// import React from 'react';

// const Button = ({ text,onClick }) => {
//   return (
//     <button text={text} onClick={onClick}/>
//   );
// };

// export default Button;

