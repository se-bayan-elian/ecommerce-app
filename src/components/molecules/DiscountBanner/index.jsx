import React from 'react'
import { StyledDiscountBanner } from './style'
import Typography from '../../atoms/Typography';
import Button from '../../atoms/Button';

const DiscountBanner = () => {
  return (
    <StyledDiscountBanner>
        <div className="left-side">
          <Typography as="h3" className="discount-title">Super discount on more than 100 USD</Typography>
          <Typography as="p" variant='default-muted' className="discount-description">Have you ever finally just write dummy info</Typography>
        </div>
        <div className="right-side">
            <div className="btn-wrapper">
              <Button variant="orange">Shop now</Button>
            </div>
        </div>
    </StyledDiscountBanner>
  )
}

export default DiscountBanner