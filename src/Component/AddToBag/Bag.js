import React from 'react'
import classes from './Bag.module.css'
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