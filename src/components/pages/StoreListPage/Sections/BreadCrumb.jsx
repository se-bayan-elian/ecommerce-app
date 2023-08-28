"use client";
import React from "react";
import { StyledBreadCrumb, StyledLink } from "./style";

const BreadCrumb = () => {
  return (
    <div>
      <StyledBreadCrumb>
        <li>
          <StyledLink href="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink href="/">Clothings</StyledLink>
        </li>
        <li>
          <StyledLink href="/">Men’s wear</StyledLink>
        </li>
        <li>
          <StyledLink href="/">Summer clothing</StyledLink>
        </li>
      </StyledBreadCrumb>
    </div>
  );
};

export default BreadCrumb;
