'use client'
import { styled } from "styled-components";

export const StyledCartOrderInfo = styled.div`
  ${props => {
    return` 
      background-color : ${props.theme.colors.whiteColor};
      border :1px solid ${props.theme.colors.gray200};
    `
  }}
  padding : 20px;
  border-radius : 6px;
  .stack{
    display : flex;
    justify-content:space-between;
    margin-bottom : 5px;
  }
  .order-price-details{
    padding-bottom : 10px;
    border-bottom : 1px solid ${props => props.theme.colors.gray200};
    
    .discount-value{
      color : ${props => props.theme.colors.baseColorRed};
    }
    .tax-value{
      color : ${props => props.theme.colors.baseColorGreen};
    }
    
  }
  .total-price{
    padding : 22px 0;
  }
  .checkout-btn-wrapper{
    width : 100%;
    margin-bottom: 18px;
    height : 54px;
  }
  .pay-ways{
    display :flex;
    justify-content:center;
    gap:8px;
  }

`