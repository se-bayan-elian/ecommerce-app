import { styled } from "styled-components";

export const GridParent = styled.div`
  display: grid;
  width: 88%;
  margin: 50px 94px;
  // background-image: ${props =>props.background ? `url(${props.background})` : 'none'};
  background-size: cover;
  border-radius: 10px;
  grid-template-columns: repeat(6, 1fr);
  border: 1px solid ${props =>props.theme.colors.gray300};
`;

export const GridItem = styled.div`
border: 1px solid ${props =>props.theme.colors.gray300};
padding: 20px;
  text-align: center;
  
`;

export const DoubleSizeItem = styled(GridItem)`
  grid-row: span 2;
  // flex:2;
  grid-column: span 2;
  border: 1px solid ${props =>props.theme.colors.gray300};
`;
