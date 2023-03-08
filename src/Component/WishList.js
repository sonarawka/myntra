import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import classes from './WishList.module.css'
const WishList = () => {
    const loggedIn = useSelector(state=>state.loggedIn)

    return (
        <div>
            <Navbar/>
            {!loggedIn.isloggedIn && <div className={classes.wishlist}>
                <b>PLEASE LOG IN</b>
                <p>Login to view items in your wishlist.</p>
                <div className={classes["wishlistLogin-icon"]}></div>
                <Link to="/login"><button>LOGIN</button></Link>
            </div>}
            {loggedIn.isloggedIn && <div className={classes.wishlist}>
                <b>YOUR WISHLIST IS EMPTY</b>
                <p>Add items that you like to your wishlist. Review them anytime and easily move them to the bag.</p>
                <div className={classes["wishlistLogin-icon"]}></div>
                <Link to="/productItems"><button>CONTINUE SHOPPING</button></Link>
            </div>}
        </div>
    )
}

export default WishList