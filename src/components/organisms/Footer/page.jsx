import Image from 'next/image'
import React, { useState } from 'react'
import LogoImage from '../../../../public/assets/images/Logo/logo.png'
import FaceBook from '../../../../public/assets/images/Icon/facebook.png'
import Linkdin from '../../../../public/assets/images/Icon/linkedin.png'
import Instagram from '../../../../public/assets/images/Icon/instagram.png'
import Twitter from '../../../../public/assets/images/Icon/twitter.png'
import Youtube from '../../../../public/assets/images/Icon/youtube.png'
import GooglePlay from '../../../../public/assets/images/Icon/GooglePlay.png'
import AppStore from '../../../../public/assets/images/Icon/AppStore.png'
import { UlData } from '@/mock/HeaderandFooterData/page'
import ULComponent from '@/components/atoms/ULComponent/page'
import { FooterFirstContent ,UlListDiv,StoreStyle, SecondFooter,FooterContainer} from '@/components/templates/StyledComponents'
import SelectInput from '@/components/atoms/SelectInput/page'
import {
  ShipTo,
} from "../../../mock/HeaderandFooterData/page";
const Footer = () => {
  const [selectedOption, setSelectedOption] = useState(ShipTo[0].value);
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <footer>
    <FooterContainer>
        
      <FooterFirstContent>
        <div className='first'>
          <Image src={LogoImage} alt="logo Image" width={160} height={45} />
        <p>Best information about the company <br /> 
            gies here but now lorem ipsum is
        </p>
        <Image src={FaceBook} alt="FaceBook Image" width={40} height={40} />
        <Image src={Twitter} alt="Twitter Image" width={40} height={40} />
        <Image src={Linkdin} alt="Linkdin Image" width={40} height={40} />
        <Image src={Instagram} alt="Instagram Image" width={40} height={40} />
        <Image src={Youtube} alt="Youtube Image" width={40} height={40} />
        </div>    
       <UlListDiv>
          <ULComponent title='About' data={UlData.About_Partnership}/>
          <ULComponent title='Partnership' data={UlData.About_Partnership}/>
          <ULComponent title='Information' data={UlData.Information}/>
          <ULComponent title='For Users' data={UlData.ForUsers}/>
          </UlListDiv>        
        <StoreStyle>
        <h2>Get Store</h2>
        <Image src={GooglePlay} alt="FaceBook Image" width={150} height={45} />
        <Image src={AppStore} alt="FaceBook Image" width={150} height={45} />
        </StoreStyle>
        </FooterFirstContent>
        <SecondFooter>
        <p>&copy; 2023 Ecommerce.</p>
        <SelectInput
            className="shipTo"
            options={ShipTo}
            value={selectedOption}
            onChange={handleSelectChange}
          />
        </SecondFooter>
    </FooterContainer>

    </footer>
  )
}

export default Footer