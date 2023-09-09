import { styled } from "styled-components";
import { StyledFlex } from "../../../../../styles/common";

export const StyledViewWay = styled(StyledFlex)`
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.gray300};
  background:${(props) => props.theme.colors.whiteColor};;
  margin-top: 22px;
  p {
    color: ${(props) => props.theme.colors.dark};
  }
  .view {
    display: flex;
    justify-content: space-evenly;
    width: 40%;
    align-items: center;
  }
  select {
    border: 1px solid ${(props) => props.theme.colors.gray300};
    background:${(props) => props.theme.colors.whiteColor};;
    padding: 10px 15px;
    border-radius: 8px;
  }

  .view-options {
    border: 1px solid ${(props) => props.theme.colors.gray300};
    background: ${(props) => props.theme.colors.whiteColor};
    display: flex;
    height: 35px;
    width : 60px;
    border-radius: 6px;
  }
  svg {
    padding:0px  5px ;
    color: ${(props) => props.theme.colors.gray500} ;
    font-size: ${(props)=>props.theme.fontSizes.lg};
  }
  button{
    flex : 1;
    box-shadow : 0 0 8px 1px ${props => props.theme.colors.gray200} ;
    &.active{
      background-color : ${props => props.theme.colors.gray200};
    }
  }
`;
