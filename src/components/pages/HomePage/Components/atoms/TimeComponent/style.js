'use client'
import { styled } from "styled-components";

export const StyledTimeComponent = styled.div`
display:flex;
width:55px;
height:58px;
align-items:center;
justify-content:center;
flex-direction :column;
border-radius: 4px;
background: var(--base-color-gray-800, #606060);
.title{
    color: ${props => props.theme.colors.whiteColor}; 
}
.number{
    color: ${props => props.theme.colors.whiteColor};
}
`