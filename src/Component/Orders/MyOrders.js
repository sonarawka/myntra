import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import db from '../../Firebase'
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import moment from 'moment/moment';
import Orderslist from './Orderslist';
import classes from './Orderslist.module.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_PRIVATE_KEY);

const MyOrders = () => {
    const loggedIn = useSelector(state=>state.loggedIn)
    const navigate=useNavigate()

    const [order, setOrder] = useState()
    const fetchDataHandler = async ()=>{
        const session = "sona@gmail.com"
        const orderRef = collection(db, "users", session, "orders");
        const result = await getDocs(query(orderRef, orderBy("timestamp", "desc")))

        const order = await Promise.all(
            result.docs.map(async (e)=>({
                id:e.id,
                amount:e.data().amount_subtotal,
                amountShipping:e.data().amount_shipping,
                images:e.data().images,
                timestamp:moment(e.data().timestamp.toDate()).unix(),
                items: await stripe.checkout.sessions.listLineItems(e.id, {limit:100}),
                desc:e.data().description
    })))
      
        setOrder(order)
            }

    
    useEffect(() => {
        fetchDataHandler()
        if(!loggedIn.isloggedIn){
            navigate('/login')
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loggedIn])
    
   
   const orderDetails= order && order.map((e)=>{return (
            {
            id:e.id,
            amount:e.amount,
            amountShipping:e.amountShipping,
            images:e.images,
            timestamp:e.timestamp,
            items:e.items,
            desc:e.desc
        }
        )})
   
   
  return (
    <div>
        <Navbar/>
        {loggedIn.isloggedIn && <div className={classes.orderlistmain}>
    
        { orderDetails &&  orderDetails.map((e)=>e.images.map((image, i)=><Orderslist
        image={image}
        key={e.id+i}
        id={e.id}
        amount={e.amount}
        amountShipping={e.amountShipping}
        timestamp={e.timestamp}
        items={e.items.data[i]}
        desc={e.desc[i]}
        />
      
        ))}
        </div>}
    </div>
  )
}

export default MyOrders