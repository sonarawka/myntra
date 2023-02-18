import React from 'react'
import Nav from './Nav'
import classes from './Success.module.css'
import { useNavigate } from 'react-router-dom';
import OrderCompletedStamp from '../Stamp/OrderCompletedStamp';

const Success = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Nav />
      <div className={classes.main}>
        <div className={`${classes.successCard}`}>
          <div className={classes.stamp}><OrderCompletedStamp /></div>
          <div className={`${classes.cardFlex} row mb-4`}>
            <div className={`col-md-7 ${classes.orderDesc}`}>
              <h3>Order Confirmed</h3>
              <p style={{ textAlign: "center" }}>Your order is currently being processed. You will recieve an order confirmation email shortly with the expected delivery date for your items.</p>
            </div>
            <div className='col-md-5'>
              <p style={{ textAlign: "center" }}>Order details</p>
              <p>Payment Mode</p>
              <p>Online</p>
            </div>
          </div>
          <p style={{ fontSize: "13px" }}><b>Note:</b> <span style={{ color: "grey" }}>We do not demand your banking and credit card details verbally or telephonically. Please do not divulge your details to fraudsters and imposters falsely claiming to be calling on Myntra's behalf.</span></p>
        </div>
        <button onClick={() => navigate('/orders')} className={classes.orderBtn}>GO TO ORDERS</button>
      </div>
    </div>
  )
}

export default Success