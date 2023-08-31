import React from 'react'
import TechComponent from '../../Components/atoms/TechComponent/TechComponent'
import smartWatch from '../../../../../../public/assets/images/tech/03.png'
import Laptop from '../../../../../../public/assets/images/tech/04.png'
import Camera from '../../../../../../public/assets/images/tech/05.png'
import headPhone from '../../../../../../public/assets/images/tech/06.png'
import mobile from '../../../../../../public/assets/images/tech/08.png'
import { DealesandOfferTable } from './style'
import GroupTimeComponent from '../../Components/molecules/GroupTimeComponent/GroupTimeComponent'
import Typography from '../../../../atoms/Typography'
const DealsAndOffersSection = () => {
  return (
    <DealesandOfferTable>
    <div className='item item-double'>
      <div className="deal">
      <h2>Deals and offers</h2>
      <Typography as='p' variant=''>Hygiene equipment</Typography>
      </div>
      <div>
        <GroupTimeComponent/>
      </div>
    </div>
    <div className='item'>
      <TechComponent 
      src={smartWatch}
      productName='Samrt watches'
      chipLabel='-25%'
      />
    </div>
    <div className='item'>
      <TechComponent 
      src={Laptop}
      productName='Laptops'
      chipLabel='-15%'
      />
    </div>
    <div className='item'>
      <TechComponent 
      src={Camera}
      productName='GoPro cameras'
      chipLabel='-40%'
      />
    </div>
    <div className='item'>
      <TechComponent 
      src={headPhone}
      productName='HeadPhones'
      chipLabel='-25%'
      />
    </div>
    <div className='item'>
      <TechComponent 
      src={mobile}
      productName='Canon camers'
      chipLabel='-25%'
      />
    </div>
    </DealesandOfferTable>
  )
}

export default DealsAndOffersSection
