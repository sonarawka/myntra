import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import db from '../../Firebase'
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import moment from 'moment/moment';
import Orderslist from './Orderslist';
import classes from './Orderslist.module.css'
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_PRIVATE_KEY);

const MyOrders = () => {
    const [order, setOrder] = useState()
    const fetchDataHandler = async ()=>{
        const session = "sona@gmail.com"
        const orderRef = collection(db, "users", session, "orders");
        const result = await getDocs(query(orderRef, orderBy("timestamp", "desc")))

        // const orders = await Promise.all(
        //     stripeOrders.docs.map(async (order)=>({
        //       id:order.id,
        //       amount:order.data().amount_total,
        //       amountShipping:order.data().amount_shipping,
        //       images:order.data().images,
        //       timestamp:moment(order.data().timestamp.toDate()).unix(),
        //       items: (
        //         await stripe.checkout.sessions.listLineItems(order.id,{limit:100})
        //       ).data
        //     }))
        //   )

        const order = await Promise.all(
            result.docs.map(async (e)=>({
                id:e.id,
                amount:e.data().amount_subtotal,
                amountShipping:e.data().amount_shipping,
                images:e.data().images,
                timestamp:moment(e.data().timestamp.toDate()).unix(),
                items: await stripe.checkout.sessions.listLineItems(e.id, {limit:100}).data
    })))
      
        setOrder(order)
            }

    
    useEffect(() => {
        fetchDataHandler()

    }, [])
    
   

  return (
    <div>
        <Navbar/>
        <div className={classes.orderlistmain}>{order && order.map((e)=>(
            <Orderslist
            key={e.id}
            id={e.id}
            amount={e.amount}
            amountShipping={e.amountShipping}
            images={e.images}
            timestamp={e.timestamp}
            />
        
        ))}
    </div>

    </div>
  )
}

export default MyOrders