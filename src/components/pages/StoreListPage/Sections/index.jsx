"use client";
import React from "react";
import BreadCrumb from "./BreadCrumb";
import Container from "@/components/atoms/Container";
import ViewOptionsProducts from "./ViewOptionsProducts";
import ProductCardInformation from "./ProductCardInformation";
import { StyledSec } from "./style";
import Pagnation from "./Pagnation";
import DropDownList from "./DropDownList";

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
    </div>
  );
};

export default Sections;
