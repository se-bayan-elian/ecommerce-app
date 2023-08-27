'use client'
import { styled } from "styled-components";

export const StyledSavedForLaterProducts = styled.div`
  background-color: ${props => props.theme.colors.whiteColor};
  padding : 20px;
  border-radius : 6px;
  border: 1px solid ${props => props.theme.colors.gray200};

  .title {
    margin-bottom: 22px ;
  }
  .stack{
    display: flex;
    justify-content: space-between;
  }
`