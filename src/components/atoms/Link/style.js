import styled from 'styled-components'

const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  font-family: ${props => props.theme.fonts};
  align-items:center;
  gap:10px;
  padding:15px;
  cursor:pointer;
`;

export default StyledLink