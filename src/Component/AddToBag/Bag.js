import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Navbar'
import BagDetail from './BagDetail'
import BagNav from './BagNav'

const Bag = () => {
  return (
    <div>
        <BagNav/>
        <BagDetail/>
    </div>
  )
}

export default Bag