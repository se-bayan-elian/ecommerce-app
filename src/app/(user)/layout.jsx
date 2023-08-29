import React from 'react'
import Header from '../../components/organisms/Header';
import Footer from '../../components/organisms/Footer';
import Copyright from '../../components/molecules/Copyright';
const Layout = ({children}) => {
  return (
    <div className='root'>
      <Header/>
      {children}
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default Layout