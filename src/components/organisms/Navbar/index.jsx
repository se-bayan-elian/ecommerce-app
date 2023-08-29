import React from 'react'
import Container from '../../atoms/Container'
import Brand from '../../atoms/Brand'
import SearchInputWithSelect from '../../molecules/SearchInputWithSelect'
import HeaderNavCollapse from '../../molecules/HeaderNavCollapse'
import { StyledNavbar } from './style'
const Navbar = () => {
  return (
    <StyledNavbar className='navbar'>
      <Container>
        <nav>
          <Brand />
          <SearchInputWithSelect/>
          <HeaderNavCollapse/>
        </nav>
      </Container>
    </StyledNavbar>
  )
}

export default Navbar