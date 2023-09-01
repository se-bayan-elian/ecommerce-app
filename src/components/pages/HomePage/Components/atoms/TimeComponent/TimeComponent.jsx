import React from 'react'
import { StyledTimeComponent } from './style'
import Typography from '../../../../../atoms/Typography'

const TimeComponent = ({number,time}) => {
  return (
    <StyledTimeComponent>
     <Typography as='h5' variant='' className="title" >{number}</Typography>
        <Typography as='p' variant='' className="number">{time}</Typography>
    </StyledTimeComponent>
  )
}

export default TimeComponent