import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='root'>
      {/* <Header/> */}
      {children}
      {/* <Footer/> */}
    </div>
  )
}

export default Layout