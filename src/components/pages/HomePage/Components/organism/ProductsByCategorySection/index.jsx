// ProductsByCategorySection.jsx
import React from 'react';
import { DoubleSizeItem, GridItem, GridParent } from './style';
import ProductCategoryComponent from '../../../Components/molecules/ProductCategoryComponent/ProductCategoryComponent';

const ProductsByCategorySection = ({ productData = [], background,variant,doubleItemContent}) => {
  return (
    <GridParent>
      <DoubleSizeItem style={{backgroundImage:`url(${background})`}}>
        <div className='DoubleItemContent'>
        <h2>{doubleItemContent.title}</h2>
        <button>{doubleItemContent.buttonText}</button></div>
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
