import React from "react";
import Typography from "../../../../../atoms/Typography";
import Image from "next/image";
import { StyledProductCategoryComponent } from "./style";
import Link from "next/link";
const ProductCategoryComponent = ({ title, price, src, href }) => {
  return (
    <StyledProductCategoryComponent>
      <Link href={href}>
        <div className="flex-inner">
          <div>
            <Typography as="h6" className="product-title">
              {title}
            </Typography>
            <Typography as="p" variant="micro-muted" className="product-price">
              From <span>{price}</span>
            </Typography>
          </div>
          <div>
            <Image src={src} width={73.948} height={57.582} />
          </div>
        </div>
      </Link>
    </StyledProductCategoryComponent>
  );
};

export default ProductCategoryComponent;
