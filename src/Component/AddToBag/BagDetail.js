import React from 'react'
import classes from './Bag.module.css'
import { useSelector } from 'react-redux';
import BagItems from './BagItems';

const BagDetail = () => {
    const product = useSelector(state=>state.product)
    const { items, totalPrice, totalQuantity}= product
    const discountPrice = (totalPrice * 0.1).toFixed()
    const checkoutHandler= async ()=>{
        const result = await fetch('http://localhost:4242/create-checkout-session', {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({items:product.items, email:"sona@gmail.com"})
        })
        const body = await result.json()
        window.location.href = body.url

    }
    console.log(items)
    return (
        <div className={classes.bagMainDiv}>
            <div>
            {items && items.map((e)=><BagItems id={e.id} img={e.img} rate={e.rate} title={e.title} desc={e.desc} price={e.price} quantity={e.quantity} itemTotalPrice={e.totalPrice} totalPrice={totalPrice} totalQuantity={totalQuantity} key={e.id}/>)}
            </div>


            <div className={classes.summaryDiv}>
                <p style={{fontWeight:"600", fontSize:"12px"}}>PRICE DETAILS ({items.length} items)</p>
                <div className={classes.summaryDetails}>
                    <p>Total Price</p>
                    <p>Rs. {totalPrice}</p>
                </div>
                <div className={classes.summaryDetails}>
                    <p>Discount on MRP</p>
                    <p style={{color:"rgb(20,205,168)"}}>-Rs. {discountPrice}</p>
                </div>
                <div className={classes.summaryDetails}>
                    <p>Coupon Discount</p>
                    <p style={{color:"rgb(255,63,108)"}}>Apply Coupon</p>
                </div>
                <div className={classes.summaryDetails}>
                    <p>Convenience Fee  <span style={{color:"rgb(255,63,108)", fontWeight:"700"}}>Know More</span></p>
                    <p style={{color:"rgb(20,205,168)"}}>FREE</p>
                </div>
                <hr/>
                <div className={classes.summaryDetails} style={{fontWeight:"700"}}>
                    <p>Total Amount</p>
                    <p>Rs. {`${totalPrice-discountPrice}`}</p>
                </div>
                <button onClick={checkoutHandler} className={classes.orderBtn}>PLACE ORDER</button>
            </div>
        </div>
    )
}

export default BagDetail