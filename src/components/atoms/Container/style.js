'use client'
import styled from "styled-components";

export const StyledContainer = styled.div`
  width : 81.14%;
  margin : auto ;
  @media (max-width : ${props => props.theme.media.miniLaptop}) {
    width : 90%;
  }
`