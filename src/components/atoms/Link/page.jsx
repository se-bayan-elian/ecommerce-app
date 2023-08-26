import React from 'react';
import styled from 'styled-components';

export const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  align-items:center;
  gap:10px;
  padding:15px;
  cursor:pointer;
`;

const Link = ({ text, href }) => {
  return <StyledLink href={href}>{text}</StyledLink>;
};

export default Link;