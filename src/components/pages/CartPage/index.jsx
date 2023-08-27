import React from "react";
import Typography from "../../atoms/Typography";
import Container from "../../atoms/Container";
import { StyledCartPage } from "./style";
import CartProducts from "../../organisms/CartProducts";
import AddCoupon from "../../molecules/AddCoupon";
import CartOrderInfo from "../../molecules/CartOrderInfo";
import ServicesFeatures from "../../organisms/ServicesFeatures";
import SavedForLaterProducts from "../../organisms/SavedForLaterProducts";
const CartPage = () => {
  const cartElementNumber = 5;
  return (
    <StyledCartPage className="cart-page">
      <Container>
        <Typography as={"h3"} className="cart-title">
          My Cart ({cartElementNumber})
        </Typography>
        <div className="stack">
          <div className="cart-products-side">
            <CartProducts />
            <ServicesFeatures />
          </div>
          <div className="order-info-side">
            <AddCoupon />
            <CartOrderInfo />
          </div>
        </div>
        <SavedForLaterProducts />
      </Container>
    </StyledCartPage>
  );
};

export default CartPage;
