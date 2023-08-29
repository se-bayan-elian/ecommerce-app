'use client'
import { styled } from "styled-components";

export const StyledAddCoupon = styled.div`
  padding: 20px 16px;
  border-radius : 6px;
  margin-bottom :12px;
  ${props => 
  {
    return `
      background-color: ${props.theme.colors.whiteColor};
      border : 1px solid ${props.theme.colors.gray300};
    `
  }
}
  .title {
    margin-bottom:9px;
  }
  form{
    width : 100%;
    display: flex;
    overflow: hidden;
    border-radius: 7px;
    /* align-items:center; */
    border : 1px solid ${props => props.theme.colors.gray200};
    input{
      padding : 11px 10px;
      width : 70%;
      ${props =>{
        return `
        font-size : ${props.theme.fontSizes.md};
         color : ${props.theme.colors.baseColorBlue};
         &::placeholder{
           color : ${props.theme.colors.gray500};

         }
        `
      }}
    }
    .btn-wrapper{
      flex : 1;
      border-left : 1px solid ${props => props.theme.colors.gray200};

      button{
        border-radius : 0;
        border : 0;
      }
    }
  }
`