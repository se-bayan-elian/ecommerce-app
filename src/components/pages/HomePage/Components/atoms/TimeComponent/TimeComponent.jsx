import React from 'react'
import { StyledTimeComponent } from './style'
import Typography from '../../../../../atoms/Typography'

const TimeComponent = ({number,time}) => {
  return (
    <StyledTimeComponent>
     {/* <Typography as='h4' variant=''>{number}</Typography> */}
        <h4>{number}</h4>
        {/* <Typography as='p' variant=''>{time}</Typography> */}
        <p>{time}</p>
    </StyledTimeComponent>
  )
}

export default TimeComponent