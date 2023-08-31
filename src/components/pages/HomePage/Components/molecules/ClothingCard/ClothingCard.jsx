import React from 'react';
import { clothesData } from '../../../mock/ClothesSectionData'; // Update the path to the actual mock data file

const ClothingCard = () => {
  return (
    <div className="clothing-card-parent">
      {clothesData.map((item, index) => (
        <div className="clothing-card" key={index}>
          <img src={item.src} alt={`Item ${index}`} />
          <div className="item-info">
          <p>Price: {item.price}</p>
            <p>{item.info}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClothingCard;
