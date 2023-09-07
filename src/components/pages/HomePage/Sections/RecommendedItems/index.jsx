"use client";
import React from 'react'
import Section from './components/Section'
// import  {RECOMMENDED_ITEMS}  from '../../mock/RecommendedItem'
import Card from './components/Card'
import Style from './style'
import { RECOMMENDED_ITEMS } from '../../mock/RecommendedItem';

const RecommendedItems = () => {
    return (
        <Section title="Recommended items">
            <Style>
                {RECOMMENDED_ITEMS.map((el , index) => <Card key={index} {...el}/>)}
            </Style>
        </Section>
    )
}

export default RecommendedItems