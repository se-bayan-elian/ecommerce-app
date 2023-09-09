import styled from "styled-components";

export const StyledHeaderNavLink = styled.div`
  a{
    display: flex;
    flex-direction: column;
    gap: 7px;
    align-items: center;
    img{
      width: 24px;
      height: 24px;
      object-fit: contain;
    }
    &:hover span{
      color: ${props => props.theme.colors.dark};
    }
  }
`