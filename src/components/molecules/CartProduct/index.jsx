import React from 'react'
import { StyledCartProduct } from './style'
import Image from 'next/image'
import Typography from '../../atoms/Typography'
import Button from '../../atoms/Button'
import SelectInput from '../../atoms/SelectInput'

const CartProduct = ({product}) => {
 
  return (
    <StyledCartProduct>
      <div className="product-image-wrapper">
        <Image src={product.img} fill={true} alt={product.title}></Image>
      </div>
      <div className="cart-product-details">
        <div className="cart-product-details-info">
          <Typography as="h5" className="cart-product-details-info-title">{product.title}</Typography>
          <Typography as="p" className="cart-product-details-info-paragraph" variant="default-muted">
            Size: {product.size} ,Color: {product.color},material: {product.material}
          </Typography>
          <Typography as="p" variant="default-muted" className="cart-product-details-info-paragraph">
            Seller: {product.seller} 
          </Typography>
          <div className="btn-group">
            <div className="remove-btn-wrapper">
              <Button variant={'warning'}>Remove</Button>
            </div>
            <div className="save-btn-wrapper">
              <Button variant={'secondary'}>Save for late</Button>
            </div>
          </div>
        </div>
        <div className="cart-product-details-price-and-qty">
          <Typography as='h5'>${product.price}</Typography>
          <SelectInput options={['1','2','3']}/>
        </div>
      </div>
    </StyledCartProduct>
  )
}

export default CartProduct