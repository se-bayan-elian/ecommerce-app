import styled from "styled-components";

export const StyledCheckBox = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  ${props => {
    return `
    color: ${props.theme.colors.dark};
    font-family: ${props.theme.fonts.inter};
    font-size: ${props.theme.fontSizes.md};
    `
  }}
  font-style: normal;
  font-weight: 400;
  line-height: normal;

`











