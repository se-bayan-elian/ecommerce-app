"use client";
import React, { useState } from "react";
import {ProductCardInformationMock} from "../../../../../mock/ProductCardInformationMock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Typography from "../../../../atoms/Typography";
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
import { useSelector } from "react-redux";
import { viewWayCONSTANTS } from "../../../../../rtk/slices/products";
const ProductCardInformation = () => {
  const [likedProducts, setLikedProducts] = useState([]);
  const handleLikeClick = (productId) => {
    if (likedProducts.includes(productId)) {
      setLikedProducts(likedProducts.filter((id) => id !== productId));
    } else {
      setLikedProducts([...likedProducts, productId]);
    }
  };
  const viewWay = useSelector((state) => state.products.viewWay);
  
  return (
    <div variant={viewWay}>
      {ProductCardInformationMock.map((product) => (
        <StyledProductCard key={product.id} variant={viewWay}>
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
