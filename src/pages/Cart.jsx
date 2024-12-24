import React from 'react'
import CartItem from '../components/CartItem'
import BillCard from '../components/BillCard'
import { useSelector } from 'react-redux'
import BackButton from '../components/BackButton'
const Cart = () => {
  
  const{cartItems} = useSelector((state)=>state.cart)
  
  
  if(!cartItems || cartItems.length == 0){
   return(
      <div className='pt-10 ml-10'>
      <BackButton/>
      <div className='min-h-screen'>
       <h1 className='my-5 text-center'>No Items In Cart</h1>
      </div>
      </div>
    )
  }
  
  return (
    <div className='container p-5'>
      <div className='p-5'>
      <BackButton/>
        <div className='grid grid-cols-2 gap-4'>
          {
            cartItems.map(cartItem => <CartItem cartItem={cartItem} key = {cartItem.id}/>)
          }
        </div>
        <BillCard cartItems = {cartItems}/>
      </div>
    </div>
  )
}

export default Cart
