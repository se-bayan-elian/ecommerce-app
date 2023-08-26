import styled from "styled-components";

export const StyledContainer = styled.div`
  width : 81.14%;
  margin : auto ;
  @media (max-width : ${props.theme.media.miniLaptop}) {
    width : 90%;
  }
`