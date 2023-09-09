"use client";
import React from 'react';
import { DoubleSizeItem, GridItem, GridParent, StyledProductsByCategorySection } from './style';
import ProductCategoryComponent from '../../../Components/molecules/ProductCategoryComponent/ProductCategoryComponent';
import Typography from '../../../../../atoms/Typography';


const ProductsByCategorySection = ({
  productData = [],
  background,
  doubleItemContent,
}) => {
  return (
    <StyledProductsByCategorySection>
      <DoubleSizeItem style={{ backgroundImage: `url(${background})` }}>
        <div className="DoubleItemContent">
          <Typography as="h5" className="doubleItem-title">
            {doubleItemContent?.title}
          </Typography>
          <a href='#!'>{doubleItemContent?.buttonText}</a>
        </div>
      </DoubleSizeItem>
      <div className="products">
      {productData.map((product, index) => (
          <ProductCategoryComponent
            title={product.title}
            price={product.price}
            src={product.src}
            key={index}
            href={'/store-list/1'}
          />
      ))}
      </div>
    </StyledProductsByCategorySection>
  );
};

export default ProductsByCategorySection;
