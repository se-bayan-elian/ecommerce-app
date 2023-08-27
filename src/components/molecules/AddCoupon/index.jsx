import React from "react";
import { StyledAddCoupon } from "./style";
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";

const AddCoupon = () => {
  return (
    <StyledAddCoupon>
      <Typography as="p" variant={"default"} className="title">
        Have a Coupon?
      </Typography>
      <form action="">
        <input type="text" placeholder="Add a Coupon"/>
        <div className="btn-wrapper">
          <Button variant="secondary">Apply</Button>
        </div>
      </form>
    </StyledAddCoupon>
  );
};

export default AddCoupon;
