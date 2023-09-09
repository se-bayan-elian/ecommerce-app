"use client";
import React from 'react'
import { Body1, Body2 } from '../../../../../LoginPage/components/Typography'
import Style from './Style'
import Image from 'next/image';

const Card = ({ flag, name, link }) => {
    return (
        <Style>
            <Image src={flag} alt={name} />
            <div>
                <Body1>{name}</Body1>
                <Body2 color="gray/500">{link}</Body2>
            </div>
        </Style>
    )
}

export default Card