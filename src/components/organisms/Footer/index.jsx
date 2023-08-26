"use client";
import React from 'react'
import Style from './style'
import Typography from '../../atoms/Typography'

// images
import fullLogo from '../../../../public/assets/images/Logo/logo.png'
import appStore from '../../../../public/assets/images/Icon/AppStore.png'
import googlePlay from '../../../../public/assets/images/Icon/GooglePlay.png'

// icons
import { ImFacebook } from 'react-icons/im'
import { BsTwitter } from 'react-icons/bs'
import { TfiLinkedin } from 'react-icons/tfi'
import { RiInstagramFill } from 'react-icons/ri'
import { AiFillYoutube } from 'react-icons/ai'
import Image from 'next/image';

const Footer = () => {
    return (
        <Style>
            <div className='grid__wrapper'>
                <div className='footer__brand'>
                    <Image src={fullLogo} alt="logo" />
                    <Typography as ='p' variant="default">Best information about the company gies here but now lorem ipsum is</Typography>
                    <div>
                        <a href="https://www.facebook.com/" className='social_icon'>
                            <ImFacebook />
                        </a>
                        <a href="http://twitter.com/" className='social_icon'>
                            <BsTwitter />
                        </a>
                        <a href="https://www.linkedin.com/" className='social_icon'>
                            <TfiLinkedin />
                        </a>
                        <a href="https://www.instagram.com/" className='social_icon'>
                            <RiInstagramFill />
                        </a>
                        <a href="https://www.youtube.com/" className='social_icon'>
                            <AiFillYoutube />
                        </a>
                    </div>
                </div>
                <div className='footer__lists'>
                    <div className='footer__list'>
                        <Typography as="p"variant="default-muted" color=''>About</Typography >
                        <Typography as="a" variant="default" >About Us</Typography >
                        <Typography as="a" variant="default" >Find store</Typography >
                        <Typography as="a" variant="default" >Categories</Typography >
                        <Typography as="a" variant="default" >Blogs</Typography >
                    </div>
                     <div className='footer__list'>
                        <Typography as="p" variant="default" >Partnership</Typography >
                        <Typography as="a" variant="default" >About Us</Typography >
                        <Typography as="a" variant="default" >Find store</Typography >
                        <Typography as="a" variant="default" >Categories</Typography >
                        <Typography as="a" variant="default" >Blogs</Typography >
                    </div>
                   <div className='footer__list'>
                        <Typography  as="p" variant="default">Information</Typography >
                        <Typography  as="a" variant="default">Help Center</Typography >
                        <Typography  as="a" variant="default">Money Refund</Typography >
                        <Typography  as="a" variant="default">Shipping</Typography >
                        <Typography  as="a" variant="default">Contact us</Typography >
                    </div>
                      <div className='footer__list'>
                        <Typography  as="p" variant="default">For users</Typography >
                        <Typography  as="a" variant="default">Login</Typography >
                        <Typography  as="a" variant="default">Register</Typography >
                        <Typography  as="a" variant="default">Settings</Typography >
                        <Typography  as="a" variant="default">My Orders</Typography >
                    </div> 
                    <div className='footer__list'>
                        <Typography as="p" variant="default" >Get app</Typography >
                        <Typography as="a" variant="default" >
                            <Image src={appStore} alt="App Store" />
                        </Typography >
                        <Typography as="a" variant="default" >
                            <Image src={googlePlay} alt="Google Play" />
                        </Typography >
                    </div>
                </div>
            </div>
        </Style>
    )
}

export default Footer