import React from "react";
import { StyledSavedForLaterProduct } from "./style";
import Image from "next/image";
import Button from '../../atoms/Button'
import Typography from '../../atoms/Typography'
const SavedForLaterProduct = ({ product }) => {
  return (
    <StyledSavedForLaterProduct>
      <div className="image-wrapper">
        <Image
          src={product.img}
          width={194}
          height={194}
          alt={product.desc}
        ></Image>
      </div>
      <div className="content">
        <Typography as="h5" className="product-price">${product.price}</Typography>
        <Typography as="p" variant="default" className="product-desc">
          {product.desc}
        </Typography>
        <div className="move-btn-wrapper">
          <Button variant="secondary">
            <Image src="/assets/images/icon/blueCart.png" width={22} height={22}></Image>
            Move to cart
          </Button>
        </div>
      </div>
    </StyledSavedForLaterProduct>
  );
};

export default SavedForLaterProduct;
