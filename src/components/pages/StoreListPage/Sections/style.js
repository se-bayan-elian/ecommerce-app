import { styled } from "styled-components";
import { StyledFlex } from "../../../../styles/common";

export const StyledBreadCrumb = styled(StyledFlex)`
  align-items: center;
  list-style: none;
  justify-content: flex-start;
  gap: 10px;

  li:not(:last-of-type)::after {
    content: ">";
    margin: 0 10px;
    color: #8b96a5;
  }
`;
export const StyledLink = styled.a`
  color: ${(props) => props.theme.colors.gray500};
  font-size: ${(props) => props.theme.fontSizes.md};
`;

export const StyledSec = styled(StyledFlex)`
  gap: 50px;
  .sec2 {
    width: 80%;
  }
`;
