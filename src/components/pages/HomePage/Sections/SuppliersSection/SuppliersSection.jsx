import React from 'react'
import { StyledH2, StyledP } from '../../../../atoms/Typography/style'
import { StyledSuppliersSection } from './style'
import Typography from '../../../../atoms/Typography'

const SuppliersSection = () => {
  return (
    <StyledSuppliersSection>
      <div>
      <Typography as='h3' >
      An easy way to send <br />
      requests to all suppliers
        </Typography>
        <Typography as= 'h6'>
        Lorem ipsum dolor sit amet, consectetur adipisicing <br />
         elit, sed do eiusmod tempor incididunt.
        </Typography>
          </div>
        <div>

        </div>
    </StyledSuppliersSection>
  )
}

export default SuppliersSection