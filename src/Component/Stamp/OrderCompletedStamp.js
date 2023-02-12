import React from 'react'
import classes from './OrderCompletedStamp.module.css'

const OrderCompletedStamp = () => {
  return (
    /* ////////Order Completed Stamp Starts here //////// */
    <div className={classes.stamp} >
    <div className={classes.circlelogo}>
      <div className={classes.order}>
        <span>O</span>
        <span>R</span>
        <span>D</span>
        <span>E</span>
        <span>R</span>
        <span style={{ fontSize: "20px", fontWeight: "800" }}>&#183;</span>
        <span style={{ fontSize: "20px", fontWeight: "800" }}>&#183;</span>
      </div>
      <div className={classes.innerStamp}>
        &#10003;
      </div>
    </div>
    <div className={classes.completed}>
      <span>C</span>
      <span>O</span>
      <span>M</span>
      <span>P</span>
      <span>L</span>
      <span>E</span>
      <span>T</span>
      <span>E</span>
      <span>D</span>
    </div>
  </div>
  /* ////////Order Completed Stamp Ends here //////// */
  )
}

export default OrderCompletedStamp