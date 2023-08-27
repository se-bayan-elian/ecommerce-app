import { styled } from "styled-components";
import { StyledFlex } from "../../../../../styles/common";

export const StyledViewWay = styled(StyledFlex)`
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  border: 1px solid #e3e8ee;
  background: #fff;
  margin-top: 22px;
  p {
    color: ${(props) => props.theme.colors.dark};
  }
  .view {
    display: flex;
    justify-content: space-evenly;
    width: 30%;
    align-items: center;
  }
  select {
    border: 1px solid #e3e8ee;
    background: #fff;
    padding: 10px 15px;
    border-radius: 8px;
  }

  .svg {
    padding: 10px 5px;
    border: 1px solid #e3e8ee;
    background: #fff;
    border-radius: 8px;
  }
  svg {
    padding-right: 10px;
    color: ${(props) => props.theme.colors.gray500};
  }
`;
