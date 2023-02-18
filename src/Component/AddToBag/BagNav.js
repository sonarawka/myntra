import React from 'react'
import classes from './Bag.module.css'
import logo from '../../Assets/myntra.png'
import { useNavigate } from 'react-router-dom';
// import { productAction } from '../../store/product';


const BagNav = () => {
  const navigate = useNavigate()


  return (
    <div className={classes['nav-main']}>
      <div className={classes.logoDiv}>
        <img alt='' className={classes['nav-logo']} src={logo} onClick={()=>navigate('/')}/>
      </div>
          
      <div className={classes.paymentSteps}>
        <span style={{color:"rgb(20,205,168)", textDecoration:"underline"}}>BAG</span>
        <span> ------------ </span>
        <span>ADDRESS</span>
        <span> ------------ </span>
        <span>PAYMENT</span>


      </div>
      <div className={classes.bagDesc}>
        <img width="26px" alt='' src='https://constant.myntassets.com/checkout/assets/img/sprite-secure.png'/> 100% SECURE
      </div>
            {/* <button onClick={()=>removeFromCart(1)}>Remove</button> */}
    </div>
  )
}

export default BagNav