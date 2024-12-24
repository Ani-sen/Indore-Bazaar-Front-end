import React, { useEffect} from 'react'
import HeroImage from "../assets/HeroImage.avif"
import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getProducts } from '../features/products/productSlice'
import Loading from '../components/Loading'
import { toast } from 'react-toastify'

const Home = () => {
  const { user } = useSelector((state) => state.auth)
  const { products , isLoading , isError,message} = useSelector(state => state.products)

  const navigate = useNavigate();
  const dispatch = useDispatch()


  useEffect(()=>{
    if(!user){
      navigate("/login")
    }

    if(isError){
      toast.error("Something Went Wrong !!")
    }

    dispatch(getProducts())
  },[user ])

  if(isLoading){
    return(
     <Loading/>
    )
  }

  return (
    <div className='container p-5'>
      {/* Hero Section */}

      <section className='p-5 h-96 flex flex-col items-center justify-around md:flex-row'>

        <div className='text-center md:text-left'>
          <h1 className='text-4xl font-bold max-w-sm my-3'>
          <p className='text-green-500'>Shop</p> Anything , Anywhere</h1>
          <p className='text-xl my-3'>Get Your Orders 24/7</p>
          <button className='bg-cyan-700 py-3 px-6 rounded-md text-white'> 
          <p className='font-bold'>Shop Now</p></button>
        </div>
      <img src= {HeroImage} className='h-80 md:block hidden' alt=''/>
      </section>

      {/* Products */}

      <h1 className='text-center text-3xl font-bold my-4 text-green-500'>
      All Products
      </h1>

      <div className='p-5 grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
        {products.map(product =>

        <ProductCard key={product.id} product={product}/>)
        }

        


      </div>
    </div>
  )
}

export default Home
