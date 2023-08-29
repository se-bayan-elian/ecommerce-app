import styled from "styled-components";

export const StyledSearchInputWithSelect = styled.div`
  display: flex;
  border-radius: 7px;
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.baseColorBlue};
  width:665px;
  input {
    padding :10px;
    width : 421px;
    & , &::placeholder{
      color: ${props => props.theme.colors.gray500};
      font-size: ${props => props.theme.fontSizes.md};
    }
  }
  .select-wrapper{
    border : 1px solid transparent;
    border-left-color : ${props => props.theme.colors.baseColorBlue};
    border-right-color : ${props => props.theme.colors.baseColorBlue};
  }
  .btn-wrapper{
    width: 100px;
    button{
      border-radius: 0px;;
    }
  }
`