import React, { useEffect } from 'react'
import BackButton from '../components/BackButton';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../features/products/productSlice';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { addToCart } from '../features/cart/cartSlice';
import { toast } from 'react-toastify';

const ProductPage = () => {

    const { product , isLoading , isError} = useSelector((state) => state.products)

    const {id} = useParams()
    const dispatch = useDispatch()

    const handleAddToCart = (product)=>{
       toast.success("Item Added Successfully"), dispatch(addToCart(product))
    }


    useEffect(()=>{
        dispatch(getProduct(id))
    },[])

    if(!product || isLoading){
        return(
            <Loading/>
        )
    }
  return (
    <div >
        <BackButton/>
    <div className="bg-white min-h-screen flex items-center justify-center">
    
    <div className="shadow-2xl flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-40 p-6 md:p-10 m-3 md:m-0">
        <div>
            <img src = {product?.image} className="w-60 hover:scale-105 duration-200 mx-auto"/>
        </div> 
    
        <div className="flex flex-col space-y-6">
            
            <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
                <div>
                    <div className="bg-black text-white rounded-full text-sm px-3 py-1 inline-block">
                        Free Shipping
                    </div>
                </div>
                  
                <div className="text-2xl font-medium max-w-sm">
                   {product?.title}
                </div>
                      
                <div className="flex flex-col mb-4 space-y-6 text-center md:text-left">
                    <p className="line-through">${product?.price + 100}</p>
                    <p className="text-5xl font-bold">${product?.price}</p>
                    <p className="text-sm font-light text-gray-400 max-w-sm">
                      {product?.description}
                    </p>
                </div>

                <div className="group">
                    <button onClick={()=>{handleAddToCart(product)}} className="transition-all duration-150 w-full bg-blue-700 text-white rounded-lg border border-b-8 border-b-blue-700 group-hover:border-b-0 group-hover:border-t-blue-700 group-hover:bg-blue-700 group-hover:shadow-lg">
                        <div className="px-8 py-4 duration-150 bg-blue-500 rounded-lg group-hover:bg-blue-700">
                            Add to Cart
                        </div>
                    </button>
                </div>

                 <div className="flex items-center space-x-3 group">
                    <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"></div>
                    <div> {product?.rating?.count} pcs. in stock</div>
                 </div>
          
                 <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
                    <button className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
                        <span>Add to cart</span>
                    </button>
                    <button className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
                        <span>Add to wishlist</span>
                    </button>
                 </div>
            </div>
        </div>
    </div>    
</div>
    </div>
  )
}

export default ProductPage
