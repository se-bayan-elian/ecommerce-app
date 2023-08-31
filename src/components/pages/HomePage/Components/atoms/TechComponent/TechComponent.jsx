import Image from 'next/image'
import React from 'react'
const TechComponent = ({src,productName,chipLabel}) => {
  return (
    <div>
        <Image src={src} alt="tech" />
        <p>{productName}</p>
        <span>{chipLabel}</span>
    </div>
  )
}

export default TechComponent;