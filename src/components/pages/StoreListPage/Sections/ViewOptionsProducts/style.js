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

  .svg {
    padding: 10px 5px;
    border: 1px solid ${(props) => props.theme.colors.gray300};
    background: ${(props) => props.theme.colors.whiteColor};
    border-radius: 8px;
  }
  svg {
    padding:0px  5px ;
    color: ${(props) => props.theme.colors.gray500};
    font-size: ${(props)=>props.theme.fontSizes.lg};
  }
`;
