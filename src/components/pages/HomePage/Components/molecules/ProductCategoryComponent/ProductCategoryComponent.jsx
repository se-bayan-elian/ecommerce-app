import React from 'react'
import Typography from '../../../../../atoms/Typography'
import Image from 'next/image'
import { StyledProductCategoryComponent } from './style'
import { StyledP } from '../../../../../atoms/Typography/style'
const ProductCategoryComponent = ({title,price,src}) => {
  return (
    <StyledProductCategoryComponent>
        <div>
           <div className='title'><h5>{title}</h5></div> 
            <div className='price'><p>From <br />{price}</p></div> 
        </div>
        <div>
            <Image src={src}
            width={73.948}
            height={57.582}
             />
        </div>
    </StyledProductCategoryComponent>
  )
}

export default ProductCategoryComponent