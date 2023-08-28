"use client";
import React, { useState } from 'react'
import AuthPages from '../../layouts/AuthPages/components'
import Style from './style'
import SignupForm from './SignupForm';
import  signUpSchema  from '../../../validations/signUpSchema';
import { Body1, H3 } from './components/Typography';
import Link from 'next/link';

const initialState = {
  name: { value: "", error: "" },
  surname: { value: "", error: "" },
  email: { value: "", error: "" },
  phone: {
    code: "",
    number: "",
    error: ""
  },
  password1: { value: "", error: "" },
  password2: { value: "", error: "" },
  agree: { value: false, error: "" },
}

const SignUpPage = () => {
  const [data, setData] = useState(initialState);
  const handelSubmit = (e) => {
    e.preventDefault();
    signUpSchema.validate({
      name: data.name.value,
      surname: data.surname.value,
      email: data.email.value,
      phoneCode: data.phone.code,
      phoneNumber: data.phone.number,
      password1: data.password1.value,
      password2: data.password2.value,
      agree: data.agree.value,
    }, { abortEarly: false })
  }
  return (
    <AuthPages>
      <Style>
        <H3 margin="0 0 17px">Register</H3>
        <SignupForm {...{ data, setData, handelSubmit }} />
        <Body1 align="center" color="gray/800">Already have an accaunt?
          <Link href="/login" color="blue">Log in</Link></Body1>
      </Style>
    </AuthPages>
  )
}

export default SignUpPage