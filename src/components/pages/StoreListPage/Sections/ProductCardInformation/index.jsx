"use client";
import React, { useState } from "react";
import ProductCardInformationMock from "../../../../../mock/ProductCardInformationMock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Typography from "@/components/atoms/Typography";
import Rating from "react-rating-stars-component";

import {
  Orders,
  RatingAndOrders,
  Shipping,
  StyledIcon,
  StyledProductCard,
  ViewDetailsButton,
  TitleWithSvg,
  StyledPrice,
  RegularPrice,
  DiscountedPrice,
  Description,
} from "./style";
const ProductCardInformation = () => {
  const [likedProducts, setLikedProducts] = useState([]);
  const handleLikeClick = (productId) => {
    if (likedProducts.includes(productId)) {
      setLikedProducts(likedProducts.filter((id) => id !== productId));
    } else {
      setLikedProducts([...likedProducts, productId]);
    }
  };
  return (
    <div>
      {ProductCardInformationMock.map((product) => (
        <StyledProductCard key={product.id}>
          <img src={product.image} alt="" />
          <div>
            <TitleWithSvg>
              <Typography as="p" variant="default" className="title">
                {" "}
                {product.title}
              </Typography>
              <StyledIcon>
                <FontAwesomeIcon
                  icon={likedProducts.includes(product.id) ? faCheck : faHeart}
                  style={{
                    color: likedProducts.includes(product.id)
                      ? "red"
                      : "#0a5ceb",
                    cursor: "pointer",
                  }}
                  onClick={() => handleLikeClick(product.id)}
                />
              </StyledIcon>
            </TitleWithSvg>
            <StyledPrice>
              <RegularPrice>${product.price.regular}</RegularPrice>
              <DiscountedPrice>${product.price.discounted}</DiscountedPrice>
            </StyledPrice>
            <RatingAndOrders>
              <Rating count={5} size={24} activeColor="#ffd700" value={4} />
              <Orders>{product.orders} orders</Orders>
              <Shipping>{product.shipping}</Shipping>
            </RatingAndOrders>
            <Description>{product.description}</Description>
            <ViewDetailsButton>View details</ViewDetailsButton>
          </div>
        </StyledProductCard>
      ))}
    </div>
  );
};

export default ProductCardInformation;
