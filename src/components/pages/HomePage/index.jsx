"use client";
import React from "react";
import DealsAndOffersSection from "./Sections/DealsAndOffersSection/DealsAndOffersSection";
import SuppliersSection from "./Sections/SuppliersSection/SuppliersSection";
import ProductsByCategorySection from "./Components/organism/ProductsByCategorySection";
import { productData } from "./mock/ProductsCategoryData";
import Container from "../../atoms/Container";
const HomePage = () => {
  const doubleItemContent = {
    section1: {
      title: "Home and outdoor",
      buttonText: "Source now",
    },
    section2: {
      title: "Consumer\nelectronics and\ngadgets",
      buttonText: "Source now",
    },
  };
  return (
    <div className="home-page">
      <Container>
        <DealsAndOffersSection />
        <ProductsByCategorySection
          productData={productData.section1}
          doubleItemContent={doubleItemContent.section1}
          background="/assets/images/other/Section1.png"
        />
        <ProductsByCategorySection
          productData={productData.section2}
          doubleItemContent={doubleItemContent.section2}
          background="/assets/images/other/Section2.png"
        />
        <SuppliersSection />
      </Container>
    </div>
  );
};

export default HomePage;
