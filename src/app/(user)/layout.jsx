import React from 'react'
import Header from '../../components/organisms/Header';
const Layout = ({children}) => {
  return (
    <div className='root'>
      <Header/>
      {children}
      {/* <Footer/> */}
    </div>
  )
}

export default Layout