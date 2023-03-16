import React from 'react'
import classes from './Product.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { productAction } from '../../store/product'
import { useNavigate } from 'react-router-dom'

const Product = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {img, rate, title, desc, id, price, discountPrice, count, brand} = props;
  const loggedIn =useSelector(state=>state.loggedIn)
  const incrementHandler = ()=>{
    
    if(loggedIn.isloggedIn){
        dispatch(productAction.addToCart({id, img:img[0], rate, title, desc, price, discountPrice, count, brand}))
    }
    else{
      navigate('/login')
    }
  }

  
  return (
    <div className={`card ${classes.productMain} col-md-3`} style={{width: "210px"}}>
      <img src={`https://wsrv.nl/?url=${img[0]}`} className="card-img-top" 
      onError={({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";
      }}
      alt={title}/>
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