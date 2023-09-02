'use client'
import React from 'react'
import { AdvertSection, LandingStyle } from './style'
import UserCard from '../../../../atoms/userCard' 
import AdvertCard from '../../../../atoms/AdvertCard'
import Link from "next/link";
const LandingSection = () => {
    return (
        <div style={{ paddingBlock: '30px' }}>
                <LandingStyle>
                    <ul className='categories'>
                        <li className='active'>Automobiles</li>
                        <li>Clothes and wear</li>
                        <li>Home interiors</li>
                        <li>Computer and tech</li>
                        <li>Tools, equipments</li>
                        <li>Sports and outdoor</li>
                        <li>Animal and pets</li>
                        <li>Machinery tools</li>
                        <li>More category</li>
                    </ul>
                    <AdvertSection>
                            <p>Latest trending</p>
                            <p>Electronic items</p>
                            <Link className='learn_more' href="/">Learn more</Link>
                    </AdvertSection>
                    <div className='options'>
                        <UserCard />
                        <AdvertCard
                            advert='Get US $10 off with a new supplier'
                            background='orange' />
                        <AdvertCard
                            advert='Send quotes with supplier preferences'
                            background="alfarra" />
                    </div>
                </LandingStyle>
        </div>
    )
}

export default LandingSection