import React from 'react'
import Button from '../Button'
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
           variant={"primary"}
          >
            Join now
            </Button>  
        </Link>
        <Link href='login'>
        <Button
           variant={"secondary"}
          >
            Log in
            </Button>  
        </Link>

      </div>
    </UserCardStyle>
  )
}

export default UserCard