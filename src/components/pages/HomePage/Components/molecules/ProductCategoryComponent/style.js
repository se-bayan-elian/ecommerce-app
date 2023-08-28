import { styled } from "styled-components";

export const StyledProductCategoryComponent= styled.div`
display:flex;
justify-content:space-between;
align-items: center;
img{
    width:100px; 
    height:100px;
}
.title h5{
    font-family:'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 450;
    line-height: normal;
    color:${props => props.theme.colors.dark}
}
.price p{
    font-family:'Inter', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color:${(props)=>props.theme.colors.grey500};
}
`