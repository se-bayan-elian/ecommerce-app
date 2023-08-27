import { styled } from "styled-components";
import { lightColors } from "../../../../../constants/styles";

// Import the background image
import backgroundImage from '../../../../../../public/assets/images/other/SupplierSectionBack.png';

export const StyledSuppliersSection = styled.div`
  width: 88%;
  margin: 50px 94px;
  height: 420px;
  top: 1406px;
  background-image: url(${backgroundImage}); // Apply the background image
  background-size: cover; // Adjust the background size
  background-position: center; // Center the background image
  left: 130px;
  border: 1px;
  background-color:red;
  h3 {
    color: white;
    font-family: 'Inter', sans-serif;
}
`;
