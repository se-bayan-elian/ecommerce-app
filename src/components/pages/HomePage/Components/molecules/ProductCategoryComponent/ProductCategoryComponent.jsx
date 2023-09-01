import React from 'react'
import Typography from '../../../../../atoms/Typography'
import Image from 'next/image'
import { StyledProductCategoryComponent } from './style'
import { StyledP } from '../../../../../atoms/Typography/style'
const ProductCategoryComponent = ({title,price,src}) => {
  return (
    <StyledProductCategoryComponent>
        <div>
           <Typography as="h6" className="product-title">{title}</Typography>
           <Typography as="p" variant="micro-muted" className="product-price">From <span>{price}</span></Typography>
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