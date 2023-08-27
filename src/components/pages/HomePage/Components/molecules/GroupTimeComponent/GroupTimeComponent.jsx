import React from 'react'
import TimeComponent from '../../atoms/TimeComponent/TimeComponent'
import { StyledGroupTimeComponent } from './style'

const GroupTimeComponent = () => {
  return (
    <StyledGroupTimeComponent>
        <TimeComponent number='04' time='Days'/>
        <TimeComponent number='13' time='Hour'/>
        <TimeComponent number='34' time='Min'/>
        <TimeComponent number='56' time='Sec'/>
    </StyledGroupTimeComponent>
  )
}

export default GroupTimeComponent