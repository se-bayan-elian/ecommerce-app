import React from "react";
import FormSelect from "../../atoms/FormSelect/FormSelect";
import Typography from "../../../../../atoms/Typography";
import Button from "../../../../../atoms/Button";
import { ButtonStyled, SelectAndInputParent, StyledSuppliersForm } from "./style";
const SuppliersForm = () => {
  return (
    <StyledSuppliersForm>
      <Typography as="h5">Send quote to suppliers</Typography>
        <input placeholder="What item you need ?" />
        <textarea placeholder="Type more details" />
      
      <SelectAndInputParent>
          <input placeholder="Quantity" />
        <FormSelect />
      </SelectAndInputParent>
     <ButtonStyled><Button variant="primary">Send inquiry</Button></ButtonStyled> 
    </StyledSuppliersForm>
  );
};

export default SuppliersForm;
