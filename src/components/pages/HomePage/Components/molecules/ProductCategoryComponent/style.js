import { styled } from "styled-components";

export const StyledProductCategoryComponent= styled.div`
display:flex;
justify-content:space-between;
align-items: center;
img{
    width:100px; 
    height:100px;
}
title{
    color:${props => props.theme.colors.gray600}
}
p{
    color:${(props)=>props.theme.colors.grey500}
}
`