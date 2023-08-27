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
margin-right:20px;

h4{
    color: ${props => props.theme.colors.whiteColor}; 
    margin:10;
    font-family: 'Inter', sans-serif;
}
p{
    margin:0;
    margin-top:15;
    color: ${props => props.theme.colors.whiteColor};
    font-family: 'Inter', sans-serif;
}
`