import React from 'react'
import { CardStyle } from './style'

export default function Card({children,variant}) {
  return (
    <CardStyle variant={variant}>
        {children}
    </CardStyle>
  )
}
