import React from "react";
import { StyledCheckBox } from "./style";

export const CheckBox = ({ value, checked, onChange, label }) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <StyledCheckBox>
      <input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={handleChange}
      />
      {label}
    </StyledCheckBox>
  );
};
