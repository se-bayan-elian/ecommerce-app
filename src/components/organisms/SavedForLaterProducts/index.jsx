import React from 'react'
import { StyledSavedForLaterProducts } from './style'
import Typography from '../../atoms/Typography'
import SavedForLaterProduct from '../../molecules/SavedForLaterProduct'

const SavedForLaterProducts = () => {
  const SavedForLaterProductsData = [
    {
      id: '1',
      price : '99.50',
      desc : 'GoPro HERO6 4K Action Camera - Black',
      img : '/assets/images/tech/07.png'
    },
    {
      id: '2',
      price : '99.50',
      desc : 'GoPro HERO6 4K Action Camera - Black',
      img : '/assets/images/tech/09.png'
    },
    {
      id: '3',
      price : '99.50',
      desc : 'GoPro HERO6 4K Action Camera - Black',
      img : '/assets/images/tech/03.png'
    },
    {
      id: '4',
      price : '99.50',
      desc : 'GoPro HERO6 4K Action Camera - Black',
      img : '/assets/images/tech/04.png'
    },
  ]
  return (
    <StyledSavedForLaterProducts>
      <Typography as="h4" className="title" >Saved for later</Typography>
      <div className="stack">
        {
          SavedForLaterProductsData.map(product => <SavedForLaterProduct product={product}/>)
        }
      </div>
    </StyledSavedForLaterProducts>
  )
}

export default SavedForLaterProducts