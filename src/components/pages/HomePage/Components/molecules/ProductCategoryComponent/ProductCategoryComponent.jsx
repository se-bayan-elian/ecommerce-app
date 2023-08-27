import React from 'react'
import Typography from '../../../../../atoms/Typography'
import Image from 'next/image'
import { StyledProductCategoryComponent } from './style'
import { StyledP } from '../../../../../atoms/Typography/style'
const ProductCategoryComponent = ({title,price,src}) => {
  return (
    <StyledProductCategoryComponent>
        <div>
          {/* <StyledP variant='micro-muted'>{title}</StyledP> */}
            <StyledP  variant='micro-muted'>{title}</StyledP>
            <StyledP  variant='default'>From <br />{price}</StyledP>
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