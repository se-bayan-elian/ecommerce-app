'use client';

import { styled } from "styled-components";

export const StyledCartProduct = styled.div`
  display: flex;
  margin-bottom: 23px;
  gap: 15px;
  padding : 20px 0px;
  ${props => {
    return `
    border-bottom: 1px solid  ${props.theme.colors.gray300} ;
    `
  }}
  .product-image-wrapper{
    width : 80px;
    height : 80px;
    position : relative;
    border-radius : 7px;
    background-color : ${props => props.theme.colors.gray200};
  }
  .cart-product-details{
    display : flex;
    width:100%;
    justify-content : space-between;
    .cart-product-details-info{
      .cart-product-details-info-title{
        margin-bottom: 6px;
      }
      .cart-product-details-info-paragraph{
        margin-bottom: 6px;
      }
      .btn-group
      {
        display : flex;
        gap :6px;
        button {
          font-size : 0.8125rem;
        }
        .remove-btn-wrapper{
          width : 71px;
          height : 30px;
        }
        .save-btn-wrapper{
          width : 100px;
          height : 30px;
        }
      }
    }


  }
  `