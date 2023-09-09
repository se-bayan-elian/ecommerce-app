'use client'

import { styled } from "styled-components";

export const StyledProductCategoryComponent = styled.div`
    width: 25%;
.flex-inner{
    display:flex;
    justify-content:space-between;
    padding : 20px  0  0 16px ;
    border: 1px solid ${props => props.theme.colors.gray300};
    img{
        width:100px; 
        height:100px;
    }
    .product-title{
        font-weight:  400;
    }
    .product-price{
    span{
        display: block;
    }
    }
}
`