import { styled } from "styled-components";

export const StyledSelect = styled.div`
  width: 120px;
  height: 40px;
  border: 1px solid ${props => props.theme.colors.gray300};
  margin-bottom: 15px;
  border-radius: 5px;
  background: none;
  color: ${props => props.theme.colors.dark};
  padding: 5px;
  font-size: 16px;
  select {
    background: none;
    font-family: 'Inter', sans-serif;
  }
`;
