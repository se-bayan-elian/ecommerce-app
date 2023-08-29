import React from "react";
import CartProduct from "../../molecules/CartProduct";
import { StyledCartProducts } from "./style";
import Button from "../../atoms/Button";

const CartProducts = () => {
  const CartProductData = [
    {
      id: "1",
      title: "T-shirts with multiple colors, for men and lady",
      img: "/assets/images/tech/01.png",
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Artel Market",
      price: "78.99",
      Qty: 9,
    },
    {
      id: "1",
      title: "T-shirts with multiple colors, for men and lady",
      img: "/assets/images/tech/01.png",
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Artel Market",
      price: "78.99",
      Qty: 9,
    },
    {
      id: "1",
      title: "T-shirts with multiple colors, for men and lady",
      img: "/assets/images/tech/01.png",
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Artel Market",
      price: "78.99",
      Qty: 9,
    },
    {
      id: "1",
      title: "T-shirts with multiple colors, for men and lady",
      img: "/assets/images/",
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Artel Market",
      price: "78.99",
      Qty: 9,
    },
  ];
  return (
    <StyledCartProducts>
      {CartProductData.map((cartProduct) => {
        return <CartProduct product={cartProduct} key={cartProduct.id} />;
      })}
      <div className="cart-control">
        <div className="back-btn-wrapper">
          <Button variant={"primary"}>
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M6 12H18M6 12L11 7M6 12L11 17"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            Back to shop
          </Button>
        </div>
        <div className="remove-all-btn-wrapper">
          <Button variant={"secondary"}>Remove all</Button>
        </div>
      </div>
    </StyledCartProducts>
  );
};

export default CartProducts;
