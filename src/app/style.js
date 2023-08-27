'use client'
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding : 0;
    margin : 0;
    border : none;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  button{
    background-color: transparent;
    cursor : pointer;
  }
  a{
    text-decoration: none;
  }
  ul {
    list-style-type: none ;
  }
  body {
    background-color: ${props => props.theme.colors.gray100};
  }
  input:focus-visible{
    outline : none;
  }
  
  @media (max-width : ${props => props.theme.media.miniLaptop} ){
     // 1 rem = 14px for mobile and tablets
    html{
      font-size: 13px;
    }
  }
  /* 1 rem = => 16px */

  


`
