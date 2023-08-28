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
  
  .firstInput {
    width: 400px;
    height: 80px;
    border-radius: 5px;
    border: 1px solid  ${props => props.theme.colors.gray300};
    margin-bottom: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      width: 350px;
      height: 40px;
      background: none;
    }
    input::placeholder {
      color: ${props => props.theme.colors.gray500};
      font-family: 'Inter', sans-serif;
      font-size: 16px;
      font-style: normal;
      line-height: normal;    
  }
  }
  .textArea {
    width: 400px;
    height: 100px;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors.dark};
    display: flex;
    border: 1px solid ${props => props.theme.colors.gray300};
    margin-bottom: 15px;
    align-items: center;
    justify-content: center;
    textarea {
      margin-top: 15px;
      width: 350px;
      height: 50px;
      background: none;
    }
    textarea::placeholder {
      color: ${props => props.theme.colors.gray500}; 
      font-family: 'Inter', sans-serif;
      font-size: 16px;
      font-style: normal;
      line-height: normal;
    }
    }
    .secondInput{
      input::placeholder {
        color: ${props => props.theme.colors.gray500}; 
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-style: normal;
        line-height: normal;   
    }
    }  
`;
export const ButtonStyled = styled.div `
  button{
    border-radius: 5px;
    background-color: ${props => props.theme.colors.baseColorBlue};
    color: ${props => props.theme.colors.whiteColor };
    width: 120px;
    font-weight: 500;
    font-size: 16px;
    margin-top:-5px;
    height: 50px;
  }
`

export const SelectAndInputParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  .secondInput {
    margin-bottom: 15px;
    height: 40px;
    height: 40px;
    border: 1px solid ${props => props.theme.colors.gray300};
    display: flex;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
    input {
      width: 150px;
      height: 30px;
      margin-left: 10px;
      background: none;
    }
  }
`;
