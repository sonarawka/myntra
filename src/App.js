import React from 'react'
import Home from './Component/Home/Home'
import './App.css'
import ProductItems from './Component/ProductItems/ProductItems'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Bag from './Component/AddToBag/Bag'
import Success from './Component/Success/Success'
import Cancel from './Component/Cancel/Cancel'
import MyOrders from './Component/Orders/MyOrders'
import Login from './Component/Login/Login'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productItems" element={<ProductItems />} />
        <Route path="/checkout/cart" element={<Bag />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/login" element={<Login />} />
      </Routes>      
    </BrowserRouter>
  )
}

export default App