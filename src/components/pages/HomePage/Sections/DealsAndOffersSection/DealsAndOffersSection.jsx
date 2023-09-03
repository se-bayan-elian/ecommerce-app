"use client";
import React from 'react'
import TechComponent from '../../Components/atoms/TechComponent/TechComponent'
import { DealesandOfferTable } from './style'
import GroupTimeComponent from '../../Components/molecules/GroupTimeComponent/GroupTimeComponent'
import Typography from '../../../../atoms/Typography'
import { dealsAndOffersData } from '../../mock/DealsAndOffersSectionData'
const DealsAndOffersSection = () => {
  return (
    <DealesandOfferTable>
    <div className='left-box '>
      <div className="deal-info">
      <Typography as="h4" className="deals-title" > Deals and offers</Typography>
      <Typography as='p' variant='default-muted' className="deals-desc">Hygiene equipment</Typography>
      </div>
      <div>
        <GroupTimeComponent/>
      </div>
    </div>
    <div className="deals-boxes">
    {dealsAndOffersData.map(offer=>{
      return <div className='item'>
      <TechComponent 
      src={offer.src}
      productName={offer.productName}
      chipLabel={offer.chipLabel}
      key={offer.id}
      />
      </div>
    })}
    </div>
    </DealesandOfferTable>
  )
}

export default DealsAndOffersSection
