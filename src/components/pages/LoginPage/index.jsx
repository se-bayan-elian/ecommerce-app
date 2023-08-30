"use client";
import React, { useState } from 'react'
import AuthPages from '../../layouts/AuthPages/components'
import loginSchema from '../../../validations/loginSchema';
import Button from './components/Button';
import LoginForm from './LoginForm';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import { Body1, H3, H4 } from './components/Typography';

import Link from 'next/link';

const LoginPage = () => {
  const [data, setData] = useState({
    username: { value: "", error: "" },
    password: { value: "", error: "" },
  });

  const [rememberMe, setRememberMe] = useState(false);

  const handelChange = (e) => {
    setData(prev => ({ ...prev, [e.target.name]: { value: e.target.value, error: "" } }))
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    loginSchema.validate({
      username: data.username.value,
      password: data.password.value
    }, { abortEarly: false })
  }
  return (
    <AuthPages>
      <H3 margin="0 0 17px">Sign in</H3>
      <LoginForm {...{ rememberMe, handelChange, handelSubmit, setRememberMe }} />
      <Button
        size="medium"
        varient="secondary"
        fullWidth
        icon={<H4 className='center'><FcGoogle /></H4>}
      >
        <Body1 color="gray/800">Continue with Google</Body1>
      </Button>

      <Button
        size="medium"
        background="#4267B2"
        fullWidth
        margin="10px 0 30px"
        icon={<H4 color="white" className='center'><AiFillFacebook /></H4>}
      >
        <Body1 color="white">Continue with Facebook</Body1>
      </Button>

      <Body1 align="center" color="gray/800">Don't have an account? <Link href="/signup">Sign up</Link></Body1>
    </AuthPages>
  )
}



export default LoginPage