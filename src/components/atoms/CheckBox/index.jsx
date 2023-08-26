import React from "react";
import Typography from "../Typography";
import { StyledCheckBox } from "./style";

const CheckBox = ({ label }) => {
  const handleChange = (e) => {
    console.log(e.target.checked)
    // here u will use the label to dispatch redux event to filter products
  };
  return (
      <StyledCheckBox>
        <input
          type="checkbox"
          name={label}
          onChange={handleChange}
        />
          {label}
      </StyledCheckBox>
  );
};

export default CheckBox;
