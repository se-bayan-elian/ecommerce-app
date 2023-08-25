import ProductDetailsPage from '@/components/pages/ProductDetailsPage';
import React from 'react'

const ProductDetails = ({ params }) => {
  const { id } = params;
  return (
    <ProductDetailsPage/>
  )
}

export default ProductDetails