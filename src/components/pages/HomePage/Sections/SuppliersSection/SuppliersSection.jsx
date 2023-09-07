"use client";
  
import React from 'react'
import { StyledSuppliersSection ,TextParent } from './style'
import Typography from '../../../../atoms/Typography'
import SuppliersForm from '../../Components/organism/SuppliersForm/SuppliersForm'

const SuppliersSection = () => {
  return (
    <StyledSuppliersSection>
      <TextParent>
      <Typography as='h3' >
      An easy way to send <br />
      requests to all suppliers
        </Typography>
        <Typography as= 'h6'>
        Lorem ipsum dolor sit amet, consectetur adipisicing <br />
         elit, sed do eiusmod tempor incididunt.
        </Typography>
          </TextParent>
        <div>
       <div className='FormPart'><SuppliersForm/></div> 
        </div>
    </StyledSuppliersSection>
  )
}

export default SuppliersSection