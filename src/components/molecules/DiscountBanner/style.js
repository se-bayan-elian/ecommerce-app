'use client'
import { styled } from "styled-components";

export const StyledDiscountBanner = styled.div`
  display: flex;
  background-color:${props => props.theme.colors.baseColorBlue400};
  border-radius : 6px;
  margin-bottom : 40px;

  .left-side{
    width : 65%;
    background-color: ${props => props.theme.colors.baseColorBlue300};
    -webkit-clip-path: polygon(0 0, 93% 0, 100% 100%, 0% 100%);
    clip-path: polygon(0 0, 93% 0, 100% 100%, 0% 100%);
    padding: 28px 30px;
    .discount-title{
      color : ${props => props.theme.colors.whiteColor};
      font-weight: 600;
    }
    .discount-description{
      color : ${props => props.theme.colors.gray400};
    }
  }
  .right-side {
    width: 35%;
    background-color: ${props => props.theme.colors.baseColorBlue400};
    padding: 39px 32px;
    
    .btn-wrapper{
      margin-left: auto;
      width: 121px;
      height: 40px;
    }
  }
`