'use client'
import { styled } from "styled-components";

export const StyledServicesFeatures = styled.div`
  .stack{
    display : flex;
    gap: 10px;
    .icon-wrapper{
      width : 48px;
      height : 48px;
      background-color :${props => props.theme.colors.gray300} ;
      border-radius : 50%;
      display :flex;
      justify-content: center;
      align-items : center;
    }
    .feature-content{
      .feature-title{
        font-weight : normal;
      }
    }
  }
`