import React from 'react'
import classes from './Bag.module.css'
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { productAction } from '../../store/product';

const BagItems = (props) => {
    
    const {id, img, rate, title, desc, price, quantity, itemTotalPrice, discountPrice}=props
    const dispatch =  useDispatch()

    const incrementHandler=()=>{dispatch(productAction.addToCart({id, img, rate, title, desc, price, discountPrice}))}
    const decrementHandler=()=>{dispatch(productAction.removeFromCart(id))}
    const clearItemFromCart=(id)=>{
        dispatch(productAction.clearItemFromCart(id))
       } 

  return (
    <div className={classes.bagDiv}>
                <div className={classes.bagImgDiv}>
                    <img src={`https://wsrv.nl/?url=${img}`} alt='' />
                </div>
                <div>
                    <p className={classes.fW}>{title.split(" ")[0]+ ' ' + title.split(" ")[1]}</p>
                    <p>{desc.slice(0,45)}{desc.length>45?"...":""}</p>
                    <div style={{ display: "flex", columnGap:"4px" }}>
                        <div onClick={decrementHandler} className={classes.qtnBtn}>-</div>
                        <p className={classes.fW}> Quantity: {quantity} </p>
                        <div onClick={incrementHandler} className={classes.qtnBtn}>+</div>
                    </div>
                    <p className={classes.fW}>Rs. {itemTotalPrice}</p>
                </div>
                <div onClick={()=>clearItemFromCart(id)} className={classes.crossBtn}>
                    <CloseIcon/>
                </div>
            </div>
  )
}

export default BagItems