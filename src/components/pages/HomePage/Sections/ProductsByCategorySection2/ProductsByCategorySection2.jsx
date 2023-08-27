import React from 'react';
import ProductsByCategorySection from '../../Components/organism/ProductsByCategorySection';
import {productDataSecond} from '../../mock/ProductsCategoryDataSection2'
const ProductsByCategorySection2 = () => {
  return (
   <div>
    <ProductsByCategorySection
     productData={productDataSecond} 
     background='/assets/images/other/Section2'/>
   </div>
    
  );
};

export default ProductsByCategorySection2;


// import React from 'react';
// import { DoubleSizeItem, GridItem, GridParent } from './style';
// import ProductCategoryComponent from '../../Components/molecules/ProductCategoryComponent/ProductCategoryComponent';
// import {productData} from '../../mock/ProductsCategoryData'; // Import the mock product data

// const ProductsByCategorySection2 = () => {
//   return (
//     <GridParent>
//       <DoubleSizeItem>1</DoubleSizeItem>
//       {productData.map((product, index) => (
//         <GridItem key={index}>
//           <ProductCategoryComponent
//             title={product.title}
//             price={product.price}
//             src={product.src}
//           />
//         </GridItem>
//       ))}
//     </GridParent>
//   );
// };

// export default ProductsByCategorySection2;