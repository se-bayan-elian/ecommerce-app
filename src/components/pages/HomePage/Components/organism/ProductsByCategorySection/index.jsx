// ProductsByCategorySection.jsx
import React from 'react';
import { DoubleSizeItem, GridItem, GridParent } from './style';
import ProductCategoryComponent from '../../../Components/molecules/ProductCategoryComponent/ProductCategoryComponent';
import Button from '../../../../../atoms/Button';

const ProductsByCategorySection = ({ productData = [], background,variant}) => {
  return (
    <GridParent>
      <DoubleSizeItem background={background}>
        {/* <Button text='aDLA' variant={variant}/> */}
      </DoubleSizeItem>
      {productData.map((product, index) => (
        <GridItem key={index}>
          <ProductCategoryComponent
            title={product.title}
            price={product.price}
            src={product.src}
          />
        </GridItem>
      ))}
    </GridParent>
  );
};

export default ProductsByCategorySection;
