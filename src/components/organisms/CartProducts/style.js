'use client'
import { styled } from "styled-components";

export const StyledCartProducts = styled.div`
  padding : 23px 20px;
  border: 1px solid ${props => props.theme.colors.gray300};
  border-radius: 6px;
  background-color: ${props => props.theme.colors.whiteColor};
  margin-bottom: 30px;

  .cart-control{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .back-btn-wrapper{
      width: 159px;
      height: 40px;
      button{
        display: flex;
        align-items: center;
        gap:8px;
        padding: 0px 10px;
        svg{
          width : 24px;
          height : 24px;
        }
      }
    }
    .remove-all-btn-wrapper{
      width: 115px;
      height: 40px;
    }
  }
`