import React from 'react';
import ProductsByCategorySection from '../../Components/organism/ProductsByCategorySection';
import {productDataSecond} from '../../mock/ProductsCategoryDataSection2'
const ProductsByCategorySection2 = () => {
  const doubleItemContent = {
    title: 'Consumer\nelectronics and\ngadgets',
    buttonText: 'Source now',
  };
  return (
   <div>
    <ProductsByCategorySection
     productData={productDataSecond} 
     background='/assets/images/other/Section2.png'
     doubleItemContent={doubleItemContent}
     />
   </div>
  );
};

export default ProductsByCategorySection2;
