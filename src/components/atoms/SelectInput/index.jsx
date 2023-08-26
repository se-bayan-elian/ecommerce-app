import React from "react";
import { StyledSelect } from "./style";

const SelectInput = ({ options, variant = "normal", ...props }) => {
  // options => [{value,label}]
  // variant => if exist : header , else = 'normal' (default)
  // take width 100% , so u must wrap it with div to control width
  return (
    <StyledSelect variant={variant} {...props}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  )
}
export default SelectInput;
