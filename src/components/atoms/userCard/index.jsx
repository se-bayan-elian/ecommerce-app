import React from 'react'
import Button from '../userButton'
import { UserCardStyle } from './style'
import Link from 'next/link'

const UserCard = () => {
  return (
    <UserCardStyle>
      <div className='info'>
        <img src='assets/images/underNavImages/avatar.png' alt='Avatar' />
        <div>
          <p>Hi, user</p>
          <p>let’s get stated</p>
        </div>
      </div>
      <div className='btns'>
        <Link href='signup'>
          <Button
            btnName='Join now'
            background='var(--primary-gradient, linear-gradient(180deg, #127FFF 0%, #0067FF 100%))'
            padding='10px 20px' 
            color='#FFF'
          />  
        </Link>
        <Link href='login'>
          <Button
            btnName='Log in'
            background='#FFF'
            padding='10px 20px'
            color='#0D6EFD'
          />
        </Link>

      </div>
    </UserCardStyle>
  )
}

export default UserCard