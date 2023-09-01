'use client'
import { styled } from "styled-components";

export const StyledSelect = styled.div`
  select {
    font-size: ${props => props.theme.fontSizes.md};
    color: ${props => props.theme.colors.dark};
    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors.gray300};
    width: 120px;
    padding: 5px;
    height: 40px;
    background: none;
    font-family: 'Inter', sans-serif;
    margin-bottom: 19px;

  }
`;
