import React from 'react'
import logo from '../Assets/myntra.png'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import classes from './Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { loggedInAction } from '../store/loggedIn';

const Navbar = () => {
    const product = useSelector(state=>state.product)
    const loggedIn = useSelector(state=>state.loggedIn)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logoutHandler=()=>{
        localStorage.clear()
        dispatch(loggedInAction.logout())

    }

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
                    {!loggedIn.isloggedIn &&<li><Link className="dropdown-item" to="/login">Login</Link></li>}
                    {loggedIn.isloggedIn && <li><div className="dropdown-item"><b>Hello {localStorage.getItem("username").split(" ")[0]}</b></div></li>}
                    {loggedIn.isloggedIn &&<li><div onClick={logoutHandler} className="dropdown-item">Logout</div></li>}
                    {loggedIn.isloggedIn &&<li><Link className="dropdown-item" to="/orders">Orders</Link></li>}
                    {/* <li><a className="dropdown-item" href="/">Something else here</a></li> */}
                </ul>
                </div>
            </div>
            <div className={classes['nav-profile']} onClick={()=>navigate('/wishlist')}>
                <FavoriteBorderIcon sx={{color:"#575b69"}}/>
                <span>Wishlist</span>
            </div>
            <div className={`${classes['nav-profile']} ${classes.bagItems}`} onClick={()=>navigate('/checkout/cart')}>
                <WorkOutlineIcon sx={{color:"#575b69"}}/>
                <span>Bag</span>
                {loggedIn.isloggedIn && <span className={classes.bagCount}>{product.totalQuantity}</span>}
                
            </div>
        </div>
    )
}

export default Navbar