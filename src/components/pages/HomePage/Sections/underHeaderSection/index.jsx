'use client'
import React from 'react'
import { AdvertSection, LandingStyle } from './style'
import Button from '../../../../atoms/userButton'
import UserCard from '../../../../atoms/userCard' 
import AdvertCard from '../../../../atoms/AdvertCard'

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
                            <Button
                                btnName='Learn more'
                                background='#FFF'
                                padding='10px 20px' />
                    </AdvertSection>
                    <div className='options'>
                        <UserCard />
                        <AdvertCard
                            advert='Get US $10 off with a new supplier'
                            background='#F38332' />
                        <AdvertCard
                            advert='Send quotes with supplier preferences'
                            background='#55BDC3' />
                    </div>
                </LandingStyle>
        </div>
    )
}

export default LandingSection