"use client";
import React, { useState } from "react";
import Navbar from "../Navbar";
import { StyledHeader } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <Navbar />
      {/* the list  */}
    </StyledHeader>
  );
};

export default Header;
