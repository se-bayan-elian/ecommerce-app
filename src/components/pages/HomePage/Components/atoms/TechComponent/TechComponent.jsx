import Image from 'next/image'
import React from 'react'
import Typography from '../../../../../atoms/Typography';
const TechComponent = ({src,productName,chipLabel}) => {
  return (
    <div>
        <Image src={src} alt="tech" className='product-img' width={101} height={121}/>
        <Typography as="h5" align='center' className="product-name">{productName}</Typography>
        <Typography as="span" className="discount">{chipLabel}</Typography>
    </div>
  )
}

export default TechComponent;