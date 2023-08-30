import React from 'react'
import Button from '../components/Button'
import CheckBox from '../components/CheckBox'
import  Input  from '../components/Input'
import PasswordInput from '../components/PasswordInput'
import PhoneInput from '../components/PhoneInput'
import { Body1 } from '../components/Typography'
import Link from 'next/link'

const SignupForm = ({ data, setData, handelSubmit }) => {
    const handelChange = (e) => {
        setData(prev => ({ ...prev, [e.target.name]: { value: e.target.value, error: "" } }))
    }

    const handelPhoneCodeChange = (code) => {
        setData(prev => ({ ...prev, phone: { ...prev.phone, code: code, error: "" } }))
    }

    const handelPhoneNumberChange = (number) => {
        setData(prev => ({ ...prev, phone: { ...prev.phone, number: number, error: "" } }))
    }

    return (
        <form onSubmit={handelSubmit}>
            <div className='name_inputs'>
                <Input
                    label={"Name"}
                    name={"name"}
                    onChange={handelChange}
                    placeholder="Type here"
 
                />

                <Input
                    label={"Surname"}
                    name={"surname"}
                    onChange={handelChange}
                    placeholder="Type here"

                />
            </div>

            <Input
                className="email_input"
                label={"Your e-mail "}
                name={"email"}
                onChange={handelChange}
                placeholder="example@mail.com"

            />

            <PhoneInput
                onCodeChange={handelPhoneCodeChange}
                onPhoneChange={handelPhoneNumberChange}
                codeValue={data.phone.code}
  
            />

            <PasswordInput
                label={"Password"}
                name={"password1"}
                onChange={handelChange}
                placeholder="At least 6 characters."
              
            />

            <PasswordInput
                label={"Repeat password"}
                name={"password2"}
                onChange={handelChange}
                placeholder="Type here"
              
            />

            <Button
                size="medium"
                fullWidth
                type="submit"
            >Register now</Button>

            <CheckBox
                label={<Body1>I agree with <Link href="">Terms and Conditions</Link></Body1>}
                onChange={() => { setData(prev => ({ ...prev, agree: { value: !prev.agree.value, error: "" } })) }}
            />
        </form>
    )
}

export default SignupForm