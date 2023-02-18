import React from 'react'
import Home from './Component/Home/Home'
import './App.css'
import ProductItems from './Component/ProductItems/ProductItems'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Bag from './Component/AddToBag/Bag'
import Success from './Component/Success/Success'
import Cancel from './Component/Cancel/Cancel'
import MyOrders from './Component/Orders/MyOrders'

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
      </Routes>      
    </BrowserRouter>
  )
}

export default App