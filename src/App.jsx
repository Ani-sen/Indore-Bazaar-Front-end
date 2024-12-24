import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login'
import Register from './pages/Register'
import ProductPage from './pages/ProductPage'
import Cart from './pages/Cart'
import CartButton from './pages/CartButton'
import { DiVim } from 'react-icons/di'
import Footer from './components/Footer'
import PageNotFound from './pages/PageNotFound';
const App = () => {
  return (
  
         <Router>
      <Navbar/>
      <Routes>
      <Route path='*' element={<PageNotFound/>}/>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/> 
       <Route path='/register' element={<Register/>}/>
       <Route path='/product/:id' element={<ProductPage/>}/>
       <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <CartButton/>
      <ToastContainer/>
      <Footer/>
    </Router>

  )
}

export default App
