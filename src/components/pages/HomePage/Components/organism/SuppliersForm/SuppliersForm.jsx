import React from "react";
import FormInput from "../../atoms/FormInput/FormInput";
import FormTextarea from "../../atoms/FormTextarea/FormTextarea";
import FormSelect from "../../atoms/FormSelect/FormSelect";
import Typography from "../../../../../atoms/Typography";
import { ButtonStyled, SelectAndInputParent, StyledSuppliersForm } from "./style";
const SuppliersForm = () => {
  return (
    <StyledSuppliersForm>
      <Typography as="h5">Send quote to suppliers</Typography>
      <div className="firstInput">
        <FormInput placeholder="What item you need ?" />
      </div>
      <div className="textArea">
        <FormTextarea placeholder="Type more details" />
      </div>
      <SelectAndInputParent>
        <div className="secondInput">
          <FormInput placeholder="Quantity" />
        </div>
        <FormSelect />
      </SelectAndInputParent>
     <ButtonStyled><button>Send inquiry</button></ButtonStyled> 
    </StyledSuppliersForm>
  );
};

export default SuppliersForm;
