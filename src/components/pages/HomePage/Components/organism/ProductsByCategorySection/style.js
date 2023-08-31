import { styled } from "styled-components";

export const GridParent = styled.div`
  display: grid;
  width: 88%;
  margin: 50px 94px;
  border-radius: 10px;
  grid-template-columns: 1fr repeat(5, 1fr);
  border: 1px solid ${(props) => props.theme.colors.gray300};
`;

export const GridItem = styled.div`
  border: 1px solid ${(props) => props.theme.colors.gray300};
  padding: 20px;
  text-align: center;
  width:100%;
  border: 0px 1px 0px 1px;
`;
export const DoubleSizeItem = styled.div`
  grid-row: span 2;
  grid-column: span 2;
  background-repeat: no-repeat;
  background-position:center top ;
  background-size: cover;
  background-image: url(assets/images/other/SupplierSectionBack.png); 
  border: 1px solid ${(props) => props.theme.colors.gray300};
  h2{
    color:${(props) => props.theme.colors.darl} !important;
    margin-left:-60px;
  }
  .DoubleItemContent{
    display:flex;
    align-items:center;
    flex-direction:column;
    margin:20px 90px;
    margin-right:200px;
  }
  button {
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.whiteColor};
    color: ${(props) => props.theme.colors.dark};
    width: 140px;
    margin-top:20px;
    font-weight: 500;
    font-size: 16px;
    height: 50px;
    margin-right:140px;
  }
`
