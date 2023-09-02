import React from 'react'

const AdvertCard = ({advert, background}) => {
    const cardStyle = {
        width: '200px',
        height: '95px',
        background: background,
        borderRadius: '6px',
        padding: '20px',
        fontFamily: "'Inter', sans-serif",
        fontSize: '20px',
        fontWeight: '400',
        color: '#FFF',
    }
  return (
      <p style={cardStyle}>{advert}</p>
  )
}

export default AdvertCard