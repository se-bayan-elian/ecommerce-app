'use client'
import styled, { css } from "styled-components";

const commonStyles = css`
text-align: ${props => props.align};
`

export const StyledH1 = styled.h1`
${props => {
    return `
      color: ${props.theme.colors.dark};
      font-family: ${props.theme.fonts.inter};
      font-size: ${props.theme.fontSizes.xxxxl};
 `
  }}
  font-style: normal;
  font-weight: 400;
  line-height: 78px; 
  letter-spacing: -1.6px;
  ${commonStyles}
`
export const StyledH2 = styled.h2`
${props => {
    return `
      color: ${props.theme.colors.dark};
      font-family: ${props.theme.fonts.inter};
      font-size: ${props.theme.fontSizes.xxxl};
 `
  }}

  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.0625rem;
`
export const StyledH3 = styled.h3`
${props => {
    return `
      color: ${props.theme.colors.dark};
      font-family: ${props.theme.fonts.inter};
      font-size: ${props.theme.fontSizes.xxl};
 `
  }}
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.0125rem;
`
export const StyledH4 = styled.h4`
${props => {
    return `
      color: ${props.theme.colors.dark};
      font-family: ${props.theme.fonts.inter};
      font-size: ${props.theme.fontSizes.xl};
 `
  }}
  font-style: normal;
  font-weight: 600;
  line-height: 2rem; 
  letter-spacing: -0.0125rem;
`
export const StyledH5 = styled.h5`
${props => {
    return `
      color: ${props.theme.colors.dark};
      font-family: ${props.theme.fonts.inter};
      font-size: ${props.theme.fontSizes.lg};
 `
  }}
  font-style: normal;
  font-weight: 600;
  line-height: 1.625rem; 
  letter-spacing: -0.0125rem;
`
export const StyledH6 = styled.h6`
${props => {
    return `
      color: ${props.theme.colors.dark};
      font-family: ${props.theme.fonts.inter};
      font-size: ${props.theme.fontSizes.md};
 `
  }}
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem; 
  letter-spacing: -0.00625rem;

`
const getPFontSize = (props) => {
  if (props.variant?.includes('small')) {
    return props.theme.fontSizes.sm
  }
  else if (props.variant?.includes('micro')) {
    return props.theme.fontSizes.micro
  }
  else {
    return props.theme.fontSizes.md
  }
}
export const StyledP = styled.p`
 ${props => {
    return `
      color: ${!props.variant?.includes('muted') ? props.theme.colors.gray600 : props.theme.colors.gray500};
      font-family: ${props.theme.fonts.inter};
      font-size: ${getPFontSize(props)
      };
      `
  }}
     font-style: normal;
     font-weight: 400;
     line-height: 1.5rem; 
     letter-spacing: -0.0125rem;
    
`