import { styled } from "styled-components";

export const StyledSuppliersSection = styled.div`
  width: 88%;
  margin: 50px 94px;
  height: 380px;
  top: 1406px;
  background-image: url(assets/images/other/SupplierSectionBack.png); 
  background-size: cover; 
  background-position: center; 
  left: 130px;
  border: 1px;
  border-radius:10px;
  display:flex;
  justify-content:space-between;
  h3 {
    color:${props => props.theme.colors.whiteColor};
    font-family: 'Inter', sans-serif;
    letter-spacing: 1px; 
    line-height: 1.4; 
  }

  h6 {
    font-weight: 300;
    color:${props => props.theme.colors.whiteColor};
    font-family: 'Inter', sans-serif;
    letter-spacing: 0.5px;
    line-height: 1.6;
  }
  .FormPart{
    margin:40px 20px;
  }
`;
export const TextParent = styled.div`
  padding: 15px;
  margin: 10px 40px;
`;
