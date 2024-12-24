import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
    <div className='rounded-md p-4 shadow-sm rounded-sm flex flex-col justify-center items-center space-y-4'>

      <img src={product.image}
      className='h-56'/>
      <span>
      <h1 className='my-1 text-2xl font-bold max-w-sm'>{product.title}</h1>
      <h2 className='my-1 text-xl font-bold'>Price : {product.price}</h2>
      <h3 className='my-1 text-sm font-semibold'>Rating : {product.rating.rate}</h3>
      </span>
      <Link to ={`/product/${product.id}`} className=" w-full flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
      <span>View Product</span>
      </Link>
    </div>
  )
}

export default ProductCard
