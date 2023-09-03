"use client";
import React from 'react'
import Section from '../RecommendedItems/components/Section'
import Style from './style'
import Card from './components/Card'
import EXTRA__SERVICES from '../../mock/ExtraServices';

const ExtraServices = () => {
    return (
        <Section title="Our extra services">
            <Style>
                {EXTRA__SERVICES.map((item, index) =>
                    <Card
                        key={index}
                        headerImage={item.headerImage}
                        icon={item.icon}
                        text1={item.text1}
                        text2={item.text2}
                    />
                )}
            </Style>
        </Section>
    )
}

export default ExtraServices