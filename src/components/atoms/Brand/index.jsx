import React from "react";
import { PATHS } from "../../../constants/paths";
import Image from 'next/image'
import Link from 'next/link'
import { brandPath } from "../../../mock/HeaderandFooterData";
import { BrandWrapper } from "./style";

const Brand = ({ src, alt }) => {
  return (
    <Link href={PATHS.HOME}>
      <BrandWrapper>
        <Image src={brandPath} fill={true} alt="brand" />
      </BrandWrapper>
    </Link>
  );
};

export default Brand;
