import React, { useState } from 'react'
import SelectInput from '../../atoms/SelectInput'
import { options } from '../../../mock/HeaderandFooterData'
import Button from '../../atoms/Button'
import { StyledSearchInputWithSelect } from './style'

const SearchInputWithSelect = () => {
  const [value ,setValue] = useState('')
  return (
    <StyledSearchInputWithSelect>
      <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} placeholder='search'/>
      <div className='select-wrapper'>
      <SelectInput options={options} variant='header'/>
      </div>
      <div className='btn-wrapper'>
      <Button variant={'primary'}> Search</Button>
      </div>
    </StyledSearchInputWithSelect>
  )
}

export default SearchInputWithSelect