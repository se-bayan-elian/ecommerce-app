import React from 'react'
import DealsAndOffersSection from './Sections/DealsAndOffersSection/DealsAndOffersSection'
import SuppliersSection from './Sections/SuppliersSection/SuppliersSection'
import ProductsByCategorySection from './Components/organism/ProductsByCategorySection'
import { productData } from './mock/ProductsCategoryData'
import RecommendedItems from './Sections/RecommendedItems'
import Container from '../../atoms/Container'
import ExtraServices from './Sections/ExtraServices'
import Suppliers from './Sections/Suppliers'
import LandingSection from './Sections/underHeaderSection'
const HomePage = () => {
  const doubleItemContent = {
    section1: {
      title: 'Home and outdoor',
      buttonText: 'Source now',
    },
    section2: {
      title: 'Consumer\nelectronics and\ngadgets',
      buttonText: 'Source now'
    }
  };
  return (
    <div>

      <Container>
        <LandingSection/>
        <DealsAndOffersSection />
        <ProductsByCategorySection productData={productData.section1} doubleItemContent={doubleItemContent.section1} background='/assets/images/other/Section1.png' />
        <ProductsByCategorySection productData={productData.section2} doubleItemContent={doubleItemContent.section2} background='/assets/images/other/Section2.png' />
        <SuppliersSection />
        <RecommendedItems />
        <ExtraServices />
        <Suppliers/>
      </Container>
    </div>
          
  );
};

export default HomePage;
