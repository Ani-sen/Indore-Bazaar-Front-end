import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { loginUser } from '../features/auth/authSlice'
import { toast } from 'react-toastify'
import Loading from '../components/Loading'

const Login = () => {

   const {user , isSuccess , isLoading , isError , message} = useSelector((state) => state.auth)
   
     const navigate = useNavigate();
     const dispatch = useDispatch();
   
     const[formData , setFormData] = useState({
       email :"",
       password :"",
     })
   
     const{email , password} = formData
   
     const handleChange = (e) => {
       setFormData({
         ...formData,
         [e.target.name] : e.target.value,
       });
     };
   
     const handleSubmit = (e) =>{
       e.preventDefault();
         dispatch(loginUser(formData))
       
     }
   
   
     useEffect(()=>{
       if(user){
         navigate("/")
       }
   
       if(isError && message){
         toast.error(message),{
           position : "top-center",
           theme:"dark"
         }
       }
   
     },[user ,isError, isLoading , message])
   
     if(isLoading){
       return(
        <Loading/>
       )
     }
  return (
    <div className ='container p-10 flex items-center justify-center'>
    <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 bg-white m-0">
 
  <div className="p-6 md:p-10">
   
      <h2 className="font-mono text-5xl font-bold mb-5">Login</h2>
      <p className="font-sans mb-12 font-light text-gray-600 max-w-sm">Kindly give following details</p>
      <form onSubmit={handleSubmit}>
      <input 
      name="email"
      value={email}
      onChange={handleChange}
      type="email" 
      placeholder="Enter your email address" 
      className="border border-gray-300 mb-2 w-full p-4 rounded-md placeholder:font-sans placeholder:font-light"/>
      <input 
      name="password"
      value={password}
      onChange={handleChange}
      type="password" 
      placeholder="Enter your password" 
      className="border border-gray-300 mb-2 w-full p-4 rounded-md placeholder:font-sans placeholder:font-light"/>
    
     <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">

         <button type = "submit"  className=" flex justify-center items-center space-x-4 bg-cyan-700 text-white w-full md:w-auto p-4 font-sans font-bold rounded-md shadow-sm px-9 shadow-cyan-100 hover:bg-opacity-90 hover:shadow-lg hover-translate-y-0.5 duration-200">
             <span>Login</span>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
             </svg>                          
         </button> 
     </div>        
      </form>

   
     <div className="mt-12 border-b border-gray-300"></div>


 </div>


 
  <img src="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=600" 
   className="w-[430px] hidden md:block"/>


</div>
</div>
  )
}

export default Login
