import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LogOutUser } from '../features/auth/authSlice';

const Navbar = () => {
 
    const {user} = useSelector((state) => state.auth);

    const dispatch = useDispatch()

    const handleLogOut = () =>{
      dispatch(LogOutUser())
    }
    return (
    <div className='container p-5 shadow-sm flex items-center justify-between md:w-full'>
       <Link to={"/"}> <h1 className='font-bold uppercase'>Indore Bazaar</h1></Link>
        <span className='flex space-x-3'>
            {!user ? (
                <>
                <Link to={"/login"} className='py-2 px-3 bg-cyan-700 rounded-sm text-white '>Login</Link>
                <Link to={"/register"} className='py-2 px-3 bg-cyan-700 rounded-sm text-white '>Register</Link>
                </>
            ) : (
              <div className='flex items-center space-x-5'>

                <p className='text-lg text-gray-400'>Hello {user.name}</p>

                <button className='py-2 px-3 bg-red-600 rounded-sm text-white '
                onClick={handleLogOut}>Logout</button>
              </div>
            )

            }
            
            
        </span>
    </div>
  )
}

export default Navbar
