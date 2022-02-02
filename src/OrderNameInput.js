import React from 'react';

export default function OrderNameInput({ setOrderName }) {
  return (
    <div className='order-name'>
      <input onChange={(e) => setOrderName(e.target.value)} />
    </div>
  );
}
