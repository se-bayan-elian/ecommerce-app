"use client";
import React from 'react'
import { Body1 } from '../../../../../LoginPage/components/Typography'
import Style from './style'
import Image from 'next/image';

const Card = ({ image, price, desc }) => {
    return (
        <Style>
            <Image className="product_image" src={image} alt={desc} />
            <Body1 weigh={500}>${price}</Body1>
            <Body1 color="gray/500">{desc}</Body1>
        </Style>
    )
}

export default Card