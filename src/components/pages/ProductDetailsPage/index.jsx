"use client";

import React from "react";
import { styled } from "styled-components";
import ContentMain from "./sections/ContentMain";
import Description from "./sections/Description";
import { lightColors } from "../../../constants/styles";
import RelatedProducts from "./sections/RelatedProducts";
import DiscountBanner from "../../molecules/DiscountBanner";

const ProductDetailsPageContainer = styled.div`
  /* background-color: ${lightColors.gray100}; */
`;

const ProductDetailsPage = () => {
  return (
    <ProductDetailsPageContainer>
      <ContentMain />
      <Description />
      <RelatedProducts />
      <DiscountBanner />
    </ProductDetailsPageContainer>
  );
};

export default ProductDetailsPage;
