import React from 'react';
import {productData} from '../../mock/ProductsCategoryData'; // Import the mock product data
import ProductsByCategorySection from '../../Components/organism/ProductsByCategorySection';

const ProductsByCategorySection1 = () => {
  return (
   <div>
    <ProductsByCategorySection
     productData={productData} 
     background='/assets/images/other/Section1'
     variant='secondary'
     />
   </div>
    
  );
};

export default ProductsByCategorySection1;

{/* <GridParent>
<DoubleSizeItem>1</DoubleSizeItem>
{/* <Typography as = "h1"></Typography> */}
// {productData.map((product, index) => (
//   <GridItem key={index}>
//     <ProductCategoryComponent
//       title={product.title}
//       price={product.price}
//       src={product.src}
//     />
//   </GridItem>
// ))}
// </GridParent>
    // <ProductsByCategorySections  productData ={productData}/> */}


// import React from 'react'
// import { DoubleSizeItem, GridItem, GridParent } from './style';
// import ProductCategoryComponent from '../../Components/molecules/ProductCategoryComponent/ProductCategoryComponent';
// // import Three from '../../../../../../public/assets/images/furniture/03.png'
// // import Four from '../../../../../../public/assets/images/furniture/04.png'
// // import Six from '../../../../../../public/assets/images/furniture/06.png'
// // import crock from '../../../../../../public/assets/images/other/03.png'
// // import Mixer from '../../../../../../public/assets/images/other/09.png'
// // import Blenders from '../../../../../../public/assets/images/other/08.png'
// // import appliance from '../../../../../../public/assets/images/other/01.png'
// // import Maker from '../../../../../../public/assets/images/other/04.png'
// const ProductsByCategorySections = () => {
//     return (
//         <GridParent>
//           <DoubleSizeItem>1</DoubleSizeItem>
//           <GridItem>
//             <ProductCategoryComponent
//             title='Soft chairs'
//             price='USD 19'
//             src={Three}
//             />
//           </GridItem>
//           <GridItem>
//             <ProductCategoryComponent
//             title='Soft & chairs'
//             price='USD 19'
//             src={Four}
//             /></GridItem>
//           <GridItem>
//           <ProductCategoryComponent
//             title='Kitchen dishes'
//             price='USD 19'
//             src={Six}
//             />
//           </GridItem>
//           <GridItem>
//           <ProductCategoryComponent
//             title='Samrt watches'
//             price='USD 19'
//             src={crock}
//             />
//           </GridItem>
//           <GridItem>
//           <ProductCategoryComponent
//             title='Kitchen mixer'
//             price='USD 100'
//             src={Mixer}
//             />
//           </GridItem>
//           <GridItem>
//           <ProductCategoryComponent
//             title='Blenders'
//             price='USD 39'
//             src={Blenders}
//             />
//           </GridItem>
//           <GridItem>
//           <ProductCategoryComponent
//             title='Home appliance'
//             price='USD 19'
//             src={appliance}
//             />
//           </GridItem>
//           <GridItem>
//             <ProductCategoryComponent
//             title='Coffee maker'
//             price='USD 19'
//             src={Maker}
//             />
//           </GridItem>
//         </GridParent>
        
//       );
// }

// export default ProductsByCategorySections
