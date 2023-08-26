import React from "react";
import Link from "next/link";
import Typography from "../Typography";
import { StyledHeaderNavLink } from "./style";
const HeaderNavLink = ({ href, label, icon }) => {
  return (
    <StyledHeaderNavLink>
      <Link href={href}>
        <img src={icon} alt={label} />
        <Typography as="span" variant={"default-muted"}>
          {label}
        </Typography>
      </Link>
    </StyledHeaderNavLink>
  );
};

export default HeaderNavLink;
