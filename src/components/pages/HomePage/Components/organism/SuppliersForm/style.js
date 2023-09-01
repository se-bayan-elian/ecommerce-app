'use client'

import { styled } from "styled-components";
export const StyledSuppliersForm = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid  ${props => props.theme.colors.whiteColor };
  width: 450px;
  height: 320px;
  padding: 15px;
  margin: -10px 10px;
  background:  ${props => props.theme.colors.whiteColor };
  border-radius: 10px;
  h5 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 10px;
    color: ${props => props.theme.colors.dark};
    font-family: "Inter", sans-serif;
    letter-spacing: 0.5px;
    line-height: 1.6;
  }
  
  input,textarea {
    width: 100%;
    padding : 11px 10px;
    border-radius: 5px;
    margin-bottom: 19px;

    border: 1px solid  ${props => props.theme.colors.gray300};
    display: flex;
    align-items: center;
    justify-content: center;
    &:focus{
      outline : 0;
      border: 1px solid ${props => props.theme.colors.baseColorBlue};
    }
    &::placeholder {
      color: ${props => props.theme.colors.gray500};
      font-family: 'Inter', sans-serif;
      font-size: ${props => props.theme.fontSizes.md};
      font-style: normal;
      line-height: normal;    
  }
  }
  textarea{
    height : 100px;
  }

 
`;
export const ButtonStyled = styled.div `
    width: 120px;
    height: 40px;
  
`

export const SelectAndInputParent = styled.div`
  display: flex;
  align-items: center;
  gap : 8px;
    input {
      width: 150px;
    }
  
`;
