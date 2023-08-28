"use client";
import React from 'react'
import Link from 'next/link';
import Typography from '../../../../atoms/Typography';

// images
import visa1 from '../../../../../../public/assets/images/Icon/expressVise.png';
import visa2 from '../../../../../../public/assets/images/Icon/masterCard.png';
import visa3 from '../../../../../../public/assets/images/Icon/paypal.png';
import visa4 from '../../../../../../public/assets/images/Icon/visa.png';
import Style from './style';

const FooterAuth = () => {
    return (
        <Style>
            <div className='visa'>
                <img src={visa1} alt="visa1" />
                <img src={visa2} alt="visa2" />
                <img src={visa3} alt="visa3" />
                <img src={visa4} alt="visa4" />
            </div>

            <div className='links'>
                <Typography as ='p' variant="default">
                    <Link href="" className='Link'>
                        Support
                    </Link>
                </Typography>
                <Typography as ='p' variant="default"> 
                    <Link href="" className='Link'>
                        Privacy & Cookies
                    </Link>
                </Typography>
                <Typography as ='p' variant="default">
                    <Link href="" className='Link'>
                        Accessibility
                    </Link>
                </Typography>
            </div>
        </Style>
    )
}

export default FooterAuth