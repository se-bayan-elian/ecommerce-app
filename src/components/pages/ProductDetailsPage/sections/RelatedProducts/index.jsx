"use client";

import React from "react";
import Typography from "../../../../atoms/Typography";
import Layout from "../Layout";
import { CardsContainer, StyledCard, StyledContentContainer } from "./style";
import Image from "next/image";
import { cards } from "../../../../../mock/info";

const RelatedProducts = () => {
  return (
    <Layout>
      <StyledContentContainer>
        <Typography as="h5">Related Products</Typography>
        <CardsContainer>
          {cards.map((card) => (
            <StyledCard key={card.id}>
              <Image src={card.src} width={100} height={100} />
              <Typography as="p" className="title">
                {card.title}
              </Typography>
              <Typography as="p">{card.price}</Typography>
            </StyledCard>
          ))}
        </CardsContainer>
      </StyledContentContainer>
    </Layout>
  );
};

export default RelatedProducts;
