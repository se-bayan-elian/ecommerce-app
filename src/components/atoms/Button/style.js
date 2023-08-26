import styled from "styled-components";

// function to handle variant
const getStylesByVariant = ({ variant, theme }) => {
  if (variant == 'primary') {
    return `
    background-color: ${theme.colors.baseColorBlue};
    color: ${theme.colors.whiteColor};
    border-color : ${theme.colors.baseColorBlue} ;
    
    &:hover{
      box-shadow: 0 0 16px 0.2px ${theme.colors.baseColorBlue};
      background-color: ${theme.colors.baseColorBlue200};
      border-color : ${theme.colors.baseColorBlue200} ;
    }
    
  `
  }
  else if (variant == 'secondary') {
    return `
      background-color: ${theme.colors.whiteColor};
      color: ${theme.colors.baseColorBlue};
      border-color : ${theme.colors.gray300};
      &:hover{
        box-shadow: 0 0 16px 0.2px ${theme.colors.baseColorBlue};
        background-color: ${theme.colors.gray200};
        border-color : ${theme.colors.gray200};
      }

    `
  }
  else if (variant == 'warning') {
    return `
      background-color: ${theme.colors.whiteColor};
      color: ${theme.colors.baseColorRed};
      border-color : ${theme.colors.gray300};
      &:hover{
        box-shadow: 0 0 16px 0.2px ${theme.colors.baseColorRed};
        background-color: ${theme.colors.gray200};
        border-color : ${theme.colors.gray200};
      }

    `
  }
  else if (variant == 'success') {
    return `
      background-color: ${theme.colors.baseColorGreen};
      color: ${theme.colors.whiteColor};
      border-color : ${theme.colors.baseColorGreen};
      &:hover{
        box-shadow: 0 0 16px 0.2px ${theme.colors.baseColorGreen200};
        background-color: ${theme.colors.baseColorGreen200};
        border-color: ${theme.colors.baseColorGreen200};
      }

    `
  }
}
export const StyledButton = styled.button`
  cursor: pointer;
  border-radius: 6px;
  width : 100%;
  height: 100%;
  border : 1px solid transparent;
  font-size: ${props => props.theme.fontSizes.md};
  padding : 7px 0px;
  
  ${(props) => {
    return getStylesByVariant(props)
  }}
`;
