import React from 'react';
import StyledLink from './style';

const Link = ({ children, href }) => {
  return <StyledLink href={href}>{children}</StyledLink>;
};

export default Link;