import React from 'react';
import {productData} from '../../mock/ProductsCategoryData'; // Import the mock product data
import ProductsByCategorySection from '../../Components/organism/ProductsByCategorySection';

const ProductsByCategorySection1 = () => {
  const doubleItemContent = {
    title: 'Home and outdoor',
    buttonText: 'Source now',
  };
  return (
   <div>
    <ProductsByCategorySection
     productData={productData} 
     background='/assets/images/other/Section1.png'
     variant='secondary'
     doubleItemContent={doubleItemContent}
     />
   </div>
    
  );
};

export default ProductsByCategorySection1;