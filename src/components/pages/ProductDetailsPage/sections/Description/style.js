import { styled } from "styled-components";
import { lightColors } from "../../../../../constants/styles";
import { StyledLayout } from "../Layout/style";

export const StyledContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const StyledContentMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 880px;
  min-height: 580px;
  background-color: #fff;
  padding: 1rem;
  margin: 2rem 1rem 2rem 0;
`;

export const StyledTabs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  width: 100%;
  border-bottom: 1px solid ${lightColors.gray300};
  padding: 0 0 1rem;

  & .active {
    border-bottom: 1px solid ${lightColors.baseColorBlue};
    color: ${lightColors.baseColorBlue};
  }
`;

export const StyledTab = styled.p`
  color: ${lightColors.gray500};
  margin-left: 1rem;
  cursor: pointer;
`;

export const StyledContent = styled.div`
  p {
    margin: 1rem 0;
    color: ${lightColors.gray600};
  }
`;

export const StyledTable = styled.div`
  width: 100%;
  color: ${lightColors.gray600};

  div {
    display: flex;
  }
`;

export const StyledTableHeader = styled.div`
  width: 30%;
  border: 1px solid ${lightColors.gray300};
  padding: 0.75rem;
  text-align: left;
  background-color: ${lightColors.gray200};
`;

export const StyledTableData = styled.div`
  width: 50%;
  border: 1px solid ${lightColors.gray300};
  padding: 0.75rem;
  text-align: left;
`;

export const Features = styled.div`
  margin: 1rem 0;
`;

export const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const YouMayLike = styled(StyledLayout)`
  max-width: 320px;
  flex-direction: column;
  margin-top: 2rem;
  background-color: white;
  border: 1px solid ${lightColors.gray300};
  padding: 1rem;

  display: flex;
  flex-direction: column;

  h5 {
    text-align: left;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Item = styled.div`
  display: flex;
  margin: 1rem 0 0 0;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    gap: 1rem;

    p {
      color: ${lightColors.dark};
    }
  }

  img {
    border: 1px solid ${lightColors.gray300};
  }

  span {
    color: ${lightColors.gray500};
  }
`;
