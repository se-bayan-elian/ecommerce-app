import { styled } from "styled-components";
import { StyledFlex } from "../../../../../styles/common";
import { StyledH3, StyledH5, StyledP } from "../../../../atoms/Typography/style";

export const StyledProductCard=styled(StyledFlex)`
align-items: center;
background-color: #FFF;
border-radius: 10px;
 border:1px solid #E3E8EE;
 margin-top:10px;
 .title{
    color: ${(props) => props.theme.colors.dark};

 }
 img{
    max-width:20%
 }
`;
export const StyledIcon=styled.div`
padding: 10px;
border-radius: 6px;
border: 1px solid  #E3E8EE;
background:  #FFF;
box-shadow: 0px 1px 2px 0px rgba(56, 56, 56, 0.08);
`

 export const TitleWithSvg = styled(StyledFlex)`
  align-items: center;
  justify-content:space-between ;
  margin-right:20px
`;

 export const StyledPrice = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

 export const RegularPrice = styled(StyledH5)`
`;

export const DiscountedPrice = styled(StyledH3)`
  margin-left: 10px;
  color: ${(props) => props.theme.colors.gray500};
  font-size: ${(props)=>props.theme.fontSizes.md};
  text-decoration: line-through;
`

export const RatingAndOrders = styled(StyledFlex)`
  align-items: center;
`

export const Rating = styled(StyledP)`
  margin-right: 10px;
  color: ${(props) => props.theme.colors.baseColorOrange};

`;

export const Orders = styled(StyledP)`
  margin-right: 10px;
  color: ${(props) => props.theme.colors.gray500};

`;

 export const Shipping = styled.span`
  color: ${(props) => props.theme.colors.baseColorGreen};

`;

export const Description = styled(StyledP)`
  font-size: 18px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.gray600};

`;

 export const ViewDetailsButton = styled(StyledP)`
  color: ${(props) => props.theme.colors.baseColorBlue};
  border: none;
  cursor: pointer;
  font-weight:500px
`;