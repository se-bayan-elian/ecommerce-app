import React from "react";
import { PATHS } from "../../../constants/paths";
import Image from 'next/image'
import Link from 'next/link'
import { BrandWrapper } from "./style";

const Brand = ({ src, alt }) => {
  return (
    <Link href={PATHS.HOME}>
      <BrandWrapper>
        <Image src={'/assets/Logo/logo.png'} fill={true} alt="brand" />
      </BrandWrapper>
    </Link>
  );
};

export default Brand;
