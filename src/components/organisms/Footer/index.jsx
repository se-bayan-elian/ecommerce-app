"use client";
import React from 'react'
import Style from './style'
import Typography from '../../atoms/Typography'

// images
import fullLogo from '../../../../public/assets/images/Logo/logo.png'
import appStore from '../../../../public/assets/images/Icon/AppStore.png'
import googlePlay from '../../../../public/assets/images/Icon/GooglePlay.png'
import Image from 'next/image';
import { FOOTER__DATA, ICONS } from '../../../mock/HeaderandFooterData';

const Footer = () => {
    return (
        <Style>
            <div className='grid__wrapper'>
                <div className='footer__brand'>
                    <Image src={fullLogo} alt="logo" />
                    <Typography as='p' variant="default">Best information about the company gies here but now lorem ipsum is</Typography>
                    <div>
                        {ICONS.map((item, index) =>
                            <a href={item.href} className='social_icon' key={index}>
                                {item.SOCIAL_ICON}
                            </a>
                        )}
                    </div>
                </div>
                <div className='footer__lists'>
                    {FOOTER__DATA.map((item, index) =>
                        <div className='footer__list' key={index}>
                            <Typography as="p" variant="default-muted">{item.head}</Typography >
                            {item.Data.map(hyperlink =>
                                <Typography as="a" variant="default" >{hyperlink}</Typography >
                            )}
                        </div>
                    )}

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