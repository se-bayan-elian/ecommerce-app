import React from "react";
import Link from "next/link";
import Typography from "../Typography";
import { StyledHeaderNavLink } from "./style";
import Image from "next/image";
const HeaderNavLink = ({ href, label, icon }) => {
  return (
    <StyledHeaderNavLink>
      <Link href={href}>
        <Image src={icon} alt={label} />
        <Typography as="span" variant={"default-muted"}>
          {label}
        </Typography>
      </Link>
    </StyledHeaderNavLink>
  );
};

export default HeaderNavLink;
