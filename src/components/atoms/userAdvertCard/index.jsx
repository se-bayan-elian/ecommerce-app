import React from 'react'
import { CardStyle } from './style'

export default function Card({childern,variant}) {
  return (
    <CardStyle variant={variant}>
        {childern}
    </CardStyle>
  )
}
