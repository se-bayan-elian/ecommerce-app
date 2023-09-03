"use client";

import React from 'react'
import { H4 } from '../../../../../LoginPage/components/Typography'

const Section = ({ title, children }) => {
    return (
        <div>
            <H4 margin="30px 0 24px">{title}</H4>
            {children}
        </div>
    )
}

export default Section