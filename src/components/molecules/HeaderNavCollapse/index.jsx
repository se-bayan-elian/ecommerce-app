import React from "react";
import HeaderNavLink from "../../atoms/HeaderNavLink";
import { HeaderNavLinks } from "../../../mock/HeaderandFooterData";
import { StyledHeaderNavCollapse } from "./style";

const HeaderNavCollapse = () => {
  return (
    <StyledHeaderNavCollapse>
      {HeaderNavLinks.map((navLink, index) => {
        return <HeaderNavLink {...navLink} key={index} />;
      })}
    </StyledHeaderNavCollapse>
  );
};

export default HeaderNavCollapse;
