import React from 'react'
import  Input  from '../components/Input'
import CheckBox from '../components/CheckBox'
import OrLine from '../../../atoms/OrLine'
import Button from '../components/Button'
import Link from 'next/link'
import PasswordInput from '../components/PasswordInput'

const LoginForm = ({ handelSubmit, handelChange, rememberMe, setRememberMe }) => {
    return (
        <form onSubmit={handelSubmit}>
            <Input
                label={"Username"}
                name={"username"}
                onChange={handelChange}
                placeholder="Email or phone"
            />
            
             <PasswordInput
                label={"Password"}
                name={"password1"}
                onChange={handelChange}
                placeholder="Type Here"
              
            />
           <CheckBox
                label="Remember me"
                value={rememberMe}
                onChange={() => {
                    setRememberMe(prev => !prev)
                }}
            />
          <Button
                size="medium"
                fullWidth
                type="submit"
            >Log In</Button>
            <OrLine>OR</OrLine>

        </form>
    )
}

export default LoginForm