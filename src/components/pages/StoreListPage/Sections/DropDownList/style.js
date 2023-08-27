import styled from "styled-components";
import { StyledH3, StyledP } from "../../../../atoms/Typography/style";
import { StyledFlex } from "../../../../../styles/common";
// import { StyledH3, StyledP } from "../Typography/style";
// import { StyledFlex } from "../../../styles/common";

export const DropDownListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

export const DropdownButton = styled(StyledH3)`
  ${(props) => {
    return `
      font-size: ${props.theme.fontSizes.md};
 `;
  }}
  border-top:1px solid  #E3E8EE;
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-top: 25px;
  svg {
    color: #8b96a5;
  }
`;

export const DropdownContent = styled.div`
  background-color: #fff;
  padding: 5px;
  margin-top: 5px;
  .seeall {
    ${(props) => {
      return `
      color: ${props.theme.colors.baseColorBlue};
 `;
    }}
  }
`;

export const CategoryList = styled.div`
  p {
    ${(props) => {
      return `
      color: ${props.theme.colors.gray600};
 `;
    }}
  }
`;

export const CheckBoxLabel = styled(StyledP)`
  display: block;
  margin-bottom: 5px;

  ${(props) => {
    return `
      color: ${props.theme.colors.dark};
      font-size: ${props.theme.fontSizes.md};
 `;
  }}
`;

export const RadioButtonLabel = styled(StyledP)`
  display: block;
  margin-bottom: 5px;
  ${(props) => {
    return `
      color: ${props.theme.colors.dark};
      font-size: ${props.theme.fontSizes.md};
 `;
  }}
`;

export const RangeInputWrapper = styled.div`
  width: 100%;
`;

export const InputWrapper = styled.div`
  input {
    border: 1px solid #e3e8ee;
    width: 100%;
    height: 30px;
    display: block;
    background-color: #fff;
    border-radius: 10px;
  }
  label {
    ${(props) => {
      return `
      color: ${props.theme.colors.dark};
      font-size: ${props.theme.fontSizes.md};
 `;
    }}
  }
`;
export const InputWrapperParent = styled(StyledFlex)`
  justify-content: center;
  gap: 20px;
`;

export const ApplyButton = styled.button`
  background-color: #fff;
  width: 265px;
  padding: 10px;
  cursor: pointer;
  border: 1px solid #e3e8ee;
  text-align: center;
  margin-top: 10px;
  border-radius: 10px;
  ${(props) => {
    return `
      color: ${props.theme.colors.baseColorBlue};
      font-size: ${props.theme.fontSizes.md};
 `;
  }}
`;
