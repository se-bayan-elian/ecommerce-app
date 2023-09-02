import { styled } from "styled-components";


export const CardStyle = styled.div`
width: 200px;
height: 95px;
background-color: ${(props)=>props.variant === "orange" ? "#F38332" : "#55BDC3" };
flex-shrink: 0;

`