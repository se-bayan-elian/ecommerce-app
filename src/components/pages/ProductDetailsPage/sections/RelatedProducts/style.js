import { styled } from "styled-components";
import { lightColors } from "../../../../../constants/styles";

export const StyledContentContainer = styled.div`
  background-color: #fff;
  max-width: 1210px;
  width: 100%;
  border: 1px solid ${lightColors.gray300};
  padding: 1rem;
  margin: 1rem auto 2rem;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin: 1rem auto;
`;

export const StyledCard = styled.div`
  width: 190px;
  margin: 0.5rem 2rem 0;

  .title {
    color: ${lightColors.dark};
    width: 90%;
  }

  img {
    background-color: ${lightColors.gray600};
  }
`;
