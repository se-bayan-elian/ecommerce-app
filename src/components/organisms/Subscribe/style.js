import styled from "styled-components";

const Style = styled.div`
  background-color: ${(props) => props.theme.colors.gray200};
  padding: 38px 16px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .subscribe__form {
    display: flex;
    gap: 8px;
    height: 40px;
    margin-top: 20px;
    width : 50%;
    justify-content: center;
  }

  .subscribe__input {
    width: 274px;
    height: 40px;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 6px;
    overflow: hidden;
  }
  .button__Subscribe{
    width: 100px;
  }
`;

export default Style;
