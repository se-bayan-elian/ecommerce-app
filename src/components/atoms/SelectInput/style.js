'use client'
import styled from "styled-components";

export const StyledSelect = styled.select`
  width: 100%;
  height : 40px;
  padding: 0px 10px;
  background-color: transparent;
  border: ${props => props.variant === 'normal' && `1px solid ${props.theme.colors.gray300}`};
  border-radius: ${props => props.variant === 'normal' && `7px`};
  cursor: pointer;
`