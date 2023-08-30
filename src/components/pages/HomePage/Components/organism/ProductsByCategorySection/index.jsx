import React from 'react';
import { DoubleSizeItem, GridItem, GridParent } from './style';
import ProductCategoryComponent from '../../../Components/molecules/ProductCategoryComponent/ProductCategoryComponent';
import Typography from '../../../../../atoms/Typography';

const ProductsByCategorySection = ({ productData = [], background,doubleItemContent}) => {
  return (
    <GridParent>
      <DoubleSizeItem style={{backgroundImage:`url(${background})`}}>
        <div className='DoubleItemContent'>
         <h2 className='doubleItem-title'>{doubleItemContent?.title}</h2>
        <button>{doubleItemContent?.buttonText}</button></div>
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
