import React from 'react';

export default function OrderImages({ foodId, sideId, drinkId }) {
  return (
    <div className='food-images'> 
      <img src={`/images/food-${foodId}.png`} className='food-image'/>
      <img src={`/images/side-${sideId}.jpeg`} className='food-image'/>
      <img src={`/images/drink-${drinkId}.png`} className='food-image'/>
    </div>
  );
}