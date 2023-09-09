import Image from 'next/image'
import React from 'react'
import Typography from '../../../../../atoms/Typography';
import Link from 'next/link';
const TechComponent = ({src,productName,chipLabel ,href='/404'}) => {
  return (
    <div>
        <Link href={href}>
          <Image src={src} alt="tech" className='product-img' width={101} height={121}/>
          <Typography as="h5" align='center' className="product-name">{productName}</Typography>
          <Typography as="span" className="discount">{chipLabel}</Typography>
        </Link>
    </div>
  )
}

export default TechComponent;