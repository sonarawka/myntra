import React from 'react'
import logo from '../Assets/myntra.png'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import classes from './Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux'

const Navbar = () => {
    const product = useSelector(state=>state.product)
    const navigate = useNavigate()
    return (
        <div className={classes['nav-main']}>
            <img alt='' className={classes['nav-logo']} src={logo} onClick={()=>navigate('/')}/>
            <p className={classes['nav-title']}>MEN</p>
            <p className={classes['nav-title']}>WOMEN</p>
            <p className={classes['nav-title']}>KIDS</p>
            <p className={classes['nav-title']}>HOME & LIVING</p>
            <p className={classes['nav-title']}>BEAUTY</p>
            <p className={classes['nav-title']}>STUDIO</p>
            <input className={classes['nav-input']} placeholder='Search for products, brand and more' />
            <div className={classes['nav-profile']}>
                <PermIdentityIcon sx={{color:"#575b69"}}/>
                <div className="dropdown">
                <button className={`${classes.dropdownBtn}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Profile
                </button>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/login">Login</Link></li>
                    <li><Link className="dropdown-item" to="/orders">Orders</Link></li>
                    {/* <li><a className="dropdown-item" href="/">Something else here</a></li> */}
                </ul>
                </div>
            </div>
            <div className={classes['nav-profile']}>
                <FavoriteBorderIcon sx={{color:"#575b69"}}/>
                <span>Wishlist</span>
            </div>
            <div className={`${classes['nav-profile']} ${classes.bagItems}`} onClick={()=>navigate('/checkout/cart')}>
                <WorkOutlineIcon sx={{color:"#575b69"}}/>
                <span>Bag</span>
                <span className={classes.bagCount}>{product.totalQuantity}</span>
                
            </div>
        </div>
    )
}

export default Navbar