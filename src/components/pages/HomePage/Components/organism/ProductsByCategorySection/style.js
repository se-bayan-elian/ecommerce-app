'use client'

import { styled } from "styled-components";

export const StyledProductsByCategorySection = styled.div`
  display: flex;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.gray300};
  background-color : ${props => props.theme.colors.whiteColor};
  margin-bottom: 15px;
  .products{
    width : calc(100% - 281px);
    display: flex;
    flex-wrap: wrap;
    transition: 0.5s ease-in;
    div{
      &:hover{
        border-color:  ${(props) => props.theme.colors.baseColorBlue};
      }
    }
  }
`;

export const DoubleSizeItem = styled.div`
  width : 281px;
  padding : 20px 11px;
  background-repeat: no-repeat;
  background-position:center top ;
  background-size: cover;
  background-image: url(assets/images/other/SupplierSectionBack.png); 
  .doubleItem-title{
    margin-bottom: 18px;
  }
  .DoubleItemContent{
    width : 50%;
    margin-bottom:20px;

  }
  a {
    display: inline-block;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.whiteColor};
    color: ${(props) => props.theme.colors.dark};
    width: 140px;
    font-weight: 500;
    font-size: ${props => props.theme.fontSizes.md};
    height: 50px;
    text-align : center;
    line-height: 50px;

    &:hover{
      background-color: ${props => props.theme.colors.gray100};
  }
    }

`
