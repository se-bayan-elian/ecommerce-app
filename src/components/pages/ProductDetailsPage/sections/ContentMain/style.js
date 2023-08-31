import { styled } from "styled-components";

import { fontSizes, lightColors } from "../../../../../constants/styles";

const styledFlex = styled.div`
  display: flex;
`;

export const StyledProductContainer = styled.div`
  width: 1230px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 1rem 0;
  margin: 2rem auto 0;
  background-color: #fff;
  border: 1px solid ${lightColors.gray300};
`;

export const PicsContainer = styled(styledFlex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ShownPic = styled.img`
  width: 345px;
  height: 345px;
  border: 1px solid ${lightColors.gray300};
`;

export const Pics = styled(styledFlex)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 1rem 0;
`;

export const Pic = styled(ShownPic)`
  width: 48px;
  height: 48px;
`;

export const MainDetails = styled(styledFlex)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 1.5rem;
  width: 40%;
`;

export const StyledStock = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  color: ${lightColors.baseColorGreen};
  gap: 0.5rem;
`;

export const StyledRatingContainer = styled(styledFlex)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${lightColors.gray500};
  }

  .dot {
    font-size: 35px;
    color: ${lightColors.gray300};
  }
`;

export const StyledPricing = styled(styledFlex)`
  background-color: #fff0df;
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  gap: 3rem;
`;

export const StyledPrice = styled.div`
  &.first {
    border: none;
    padding-left: 0;
  }

  p.selected {
    color: ${lightColors.baseColorRed};
  }

  p {
    color: ${lightColors.dark};
    font-weight: 600;
    font-size: ${fontSizes.lg};
    margin: 0 0 0.5rem;
  }

  span {
    color: ${lightColors.gray600};
  }

  border-left: 1px solid ${lightColors.gray400};
  padding-left: 1rem;
`;

export const StyledDetails = styled.div`
  width: 100%;
  border-bottom: 2px solid ${lightColors.gray300};
  padding: 1rem 0;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledRow = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: 1rem;
`;

export const StyledTitle = styled.div`
  color: ${lightColors.gray500};
  width: 120px;
  text-align: left;
  margin: 5px 0;
`;

export const StyledDetail = styled.div`
  color: ${lightColors.gray600};
`;

export const CompanyDetails = styled(styledFlex)`
  flex-direction: column;
  border: 1px solid ${lightColors.gray300};
  padding: 1rem;
`;

export const CompanyName = styled(styledFlex)`
  gap: 0 1rem;
  align-items: center;
  margin: 0 0 1rem;
  border-bottom: 1px solid ${lightColors.gray300};
  padding: 0 0 1rem 0;
`;

export const CompanyLocation = styled(styledFlex)`
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    gap: 1rem;
    color: ${lightColors.gray500};

    .icon {
      font-size: 18px;
    }
  }
`;

export const SaveLater = styled(styledFlex)`
  align-items: center;
  justify-content: center;
  color: ${lightColors.baseColorBlue};
  margin: 1rem auto;
  font-weight: 500;
  margin: 1rem;
  cursor: pointer;
`;
