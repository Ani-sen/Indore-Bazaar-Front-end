import React from 'react'

const BillCard = ({cartItems}) => {

  const total = cartItems.reduce((p,c) =>p + c.price * c.quantity,0);
  return (
    <div className='p-5'>
    <h1 className='text-4xl font-semibold'>Your Bill :</h1>
    <h2 className='text-2xl my-2'>Total Items : {cartItems.length}</h2>
    <h2 className='text-2xl my-2'>Tax (GST : 18%) : {((total * 18) / 100).toFixed(2)}</h2>
    <h3 className='text-2xl my-2'>Total Amount :{(total + (total *18) / 100).toFixed(2)}</h3>
    <button className='w-full rounded-md bg-green-700 py-3 px-5 mt-5'>
      <p className='font-bold text-white '>Pay Now</p>
    </button>
  </div>
  )
}

export default BillCard
