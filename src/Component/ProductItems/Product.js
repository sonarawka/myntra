import React from 'react'
import classes from './Product.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { productAction } from '../../store/product'
import { useNavigate } from 'react-router-dom'

const Product = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {img, rate, title, desc, id, price} = props;
  const loggedIn =useSelector(state=>state.loggedIn)
  const incrementHandler = ()=>{
    
    if(loggedIn.isloggedIn){
        dispatch(productAction.addToCart({id, img, rate, title, desc, price}))
    }
    else{
      navigate('/login')
    }
  }

  
  return (
    <div className={`card ${classes.productMain} col-md-3 m-3`} style={{width: "210px"}}>
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <div>
          <p className='m-0'>{rate}</p>
          <h5 className={`${classes.productTitle}`}>{title.split(" ")[0]+ ' ' + title.split(" ")[1]}</h5>
          <p className={`card-text m-0 ${classes.productDesc}`}>{desc.slice(0,17)}{desc.length>17?"...":""}</p>
        </div>
        <button onClick={incrementHandler} className={classes.productBtn}>Add To Bag</button>
        <p>Rs.{price}</p>
      </div>
    </div>
  )
}

export default Product