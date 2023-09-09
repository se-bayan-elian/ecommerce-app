"use client";
import React from 'react'
import Section from './components/Section'
import Style from './style'
import Card from './components/Card'
import SUPPLIERS from '../../mock/Suppliers';

const Suppliers = () => {
    return (
        <Section title="Suppliers by region">
            <Style>
                {SUPPLIERS.map((item, index) =>
                    <Card
                        key={index}
                        flag={item.flag}
                        name={item.name}
                        link={item.link}
                    />
                )}
            </Style>
        </Section>
    )
}

export default Suppliers