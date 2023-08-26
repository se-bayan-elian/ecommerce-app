import React from "react";
import styled from "styled-components";
import CheckBox from "../../atoms/CheckBox";
import { StyledCheckBoxGroup } from "./style";



const CheckboxGroup = ({ options }) => {
  // this is mock data u must add options in this style and delete the following
  options = [
    'Samsung',
    'Apple',
    'Huawei',
    'Pocco','Lenovo'
  ]
  return (
   <StyledCheckBoxGroup>
     {options.map(option =><CheckBox label={option}/>
     )}
   </StyledCheckBoxGroup>
  );
};

export default CheckboxGroup;
