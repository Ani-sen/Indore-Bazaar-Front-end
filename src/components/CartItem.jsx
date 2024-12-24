import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../features/cart/cartSlice'
import { toast } from 'react-toastify'

const CartItem = ({cartItem}) => {
const dispatch = useDispatch()

const handleRemove = (id) =>{
  toast.info("Item Removed Successfully"), dispatch(removeFromCart(id))
}

  return (

    <div className='p-5'>
      <div className='mb-3 flex items-center space-x-10 p-5 rounded-md border shadow-sm'>
        <img src= {cartItem.image}
         className='w-32'/>
        <span>
          <h1 className='text-xl font-bold my-2'>{cartItem.title}</h1>
          <h2 className='text-lg font-bold my-2'>Price : {cartItem.price}</h2>
          <h2 className='text-lg font-bold my-2'>SubTotal : {cartItem.price * cartItem.quantity}</h2>
          <h3 className='text-sm font-bold my-2'>Qty : {cartItem.quantity}</h3>
        <button onClick={() => handleRemove(cartItem.id)} className='bg-red-500 text-white py-0.5 px-2 rounded-md my-3'>
            <p className='text-sm font-semibold'>Remove</p>
        </button>
        </span>
      </div>
    </div>
  )
}

export default CartItem
