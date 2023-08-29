"use client";
import React from "react";
import BreadCrumb from "./BreadCrumb";
import Container from "@/components/atoms/Container";
import ViewOptionsProducts from "./ViewOptionsProducts";
import ProductCardInformation from "./ProductCardInformation";
import { StyledSec } from "./style";
import Pagnation from "./Pagnation";
import DropDownList from "./DropDownList";
import Footer from "../../../organisms/Footer";
import Copyright from "../../../molecules/Copyright";
import Subscribe from "../../../organisms/Subscribe";
const Sections = () => {
  return (
    <div>
      <Container>
        <BreadCrumb />
        <StyledSec>
          <DropDownList />
          <div className="sec2">
            <ViewOptionsProducts />
            <ProductCardInformation />
          </div>
        </StyledSec>
        <Pagnation />
      </Container>
      <Subscribe/>
      <Footer />
      <Copyright/>
    </div>
  );
};

export default Sections;
