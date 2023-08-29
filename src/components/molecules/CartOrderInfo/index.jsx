import React from "react";
import { StyledCartOrderInfo } from "./style";
import Typography from "../../atoms/Typography";
import Button from '../../atoms/Button';
import Image from "next/image";
const CartOrderInfo = () => {
  const prices = {
    subTotal: 1403.97,
    discount: 60.0,
    tax: 14.0,
    total : 1357.97
  };
  const paysWays = [
    {
      id : '1',
      label : 'American Express ',
      icon : '/assets/images/icon/AmericanEx.png'
    },
    {
      id : '2',
      label : 'Master Card',
      icon : '/assets/images/icon/payment2.png'
    },
    {
      id : '3',
      label : 'Paypal',
      icon : '/assets/images/icon/pp(Payment).png'
    },
    {
      id : '4',
      label : 'Visa Card',
      icon : '/assets/images/icon/visa.png'
    },
    {
      id : '5',
      label : 'Apple Pay',
      icon : '/assets/images/Icon/applePayment.png'
    }
    
  ]
  return (
    <StyledCartOrderInfo>
      <div className="order-price-details">
        <div className="stack">
          <Typography as="span" variant={"default"}>
            Subtotal:
          </Typography>
          <Typography as="span" variant={"default"} className="subtotal-value">
            ${prices.subTotal}
          </Typography>
        </div>
        <div className="stack">
          <Typography as="span" variant={"default"}>
            Discount:
          </Typography>
          <Typography as="span" variant={"default"} className="discount-value">
            -${prices.discount}
          </Typography>
        </div>
        <div className="stack">
          <Typography as="span" variant={"default"}>
            Tax:
          </Typography>
          <Typography as="span" variant={"default"} className="tax-value">
            +${prices.tax}
          </Typography>
        </div>
      </div>
      <div className="total-price">
        <div className="stack">
        <Typography as="h5">Total:</Typography>
        <Typography as="h5">${prices.total}</Typography>
        </div>
      </div>
      <div className="checkout-btn-wrapper">
        <Button variant="success">Checkout</Button>
      </div>
      <div className="pay-ways">
        {
          paysWays.map(payWay => {
           return <Image src={payWay.icon} alt={payWay.label} width={34} height={22} key={payWay.id}/>
          })
        }
      </div>
    </StyledCartOrderInfo>
  );
};

export default CartOrderInfo;
