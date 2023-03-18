import React from 'react'
import classes from './Bag.module.css'
import logo from '../../Assets/myntra.png'
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { productAction } from '../../store/product';


const BagNav = () => {
  const navigate = useNavigate()
  

  return (
    <div>
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
      <div className={classes.smallNavmain}>
          <div><ArrowBackIcon onClick={()=>navigate(-1)}/> <span className={classes.ShopBag}>SHOPPING BAG</span></div>
          <p>STEP 1/3</p>
      </div>
    </div>
  )
}

export default BagNav