'use client';
import { styled } from "styled-components";

export const StyledSavedForLaterProduct = styled.div`
  .image-wrapper{
    height : 240px;
    background-color : ${props => props.theme.colors.gray300};
    display: flex;
    justify-content : center;
    align-items: center;
    border-radius : 9px;
  }
  .content{
    padding : 10px 0;
  }
  .product-price{
    margin-bottom : 10px;
  }
  .product-desc{
    width : 65%;
    margin-bottom : 10px;
  }
  .move-btn-wrapper{
    width : 55%;
    button{
      display :flex;
      align-items: center;
      justify-content: center;
      gap : 3px;
      font-weight: bold;
    }
  }
`