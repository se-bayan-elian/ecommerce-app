import React from "react";
import FormSelect from "../../atoms/FormSelect/FormSelect";
import Typography from "../../../../../atoms/Typography";
import { ButtonStyled, SelectAndInputParent, StyledSuppliersForm } from "./style";
const SuppliersForm = () => {
  return (
    <StyledSuppliersForm>
      <Typography as="h5">Send quote to suppliers</Typography>
      <div className="firstInput">
        <input placeholder="What item you need ?" />
      </div>
      <div className="textArea">
        <textarea placeholder="Type more details" />
      </div>
      <SelectAndInputParent>
        <div className="secondInput">
          <input placeholder="Quantity" />
        </div>
        <FormSelect />
      </SelectAndInputParent>
     <ButtonStyled><button>Send inquiry</button></ButtonStyled> 
    </StyledSuppliersForm>
  );
};

export default SuppliersForm;
