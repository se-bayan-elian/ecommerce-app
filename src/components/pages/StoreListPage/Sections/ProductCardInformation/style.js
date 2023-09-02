import { styled } from "styled-components";
import { StyledGrid } from "../../../../../styles/common";
import {
  StyledH3,
  StyledH5,
  StyledP,
} from "../../../../atoms/Typography/style";

export const StyledProductCard = styled(StyledGrid)`
  align-items: center;
  background-color: ${(props) => props.theme.colors.whiteColor};
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.gray300};
  margin-top: 10px;
  .title {
    color: ${(props) => props.theme.colors.dark};
  }
  img {
    max-width: 20%;
  }
`;

export const TitleWithSvg = styled(StyledGrid)`
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
`;

export const StyledPrice = styled.div`
  display: grid;
  align-items: center;
  margin: 10px 0;
`;

export const RegularPrice = styled(StyledH5)``;

export const DiscountedPrice = styled(StyledH3)`
  margin-left: 10px;
  color: ${(props) => props.theme.colors.gray500};
  font-size: ${(props) => props.theme.fontSizes.md};
  text-decoration: line-through;
`;

export const RatingAndOrders = styled(StyledGrid)`
  align-items: center;
`;

export const Orders = styled(StyledP)`
  margin: 0 10px;
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
  font-weight: 500px;
`;