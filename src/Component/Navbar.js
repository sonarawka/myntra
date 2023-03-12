import React from 'react'
import logo from '../Assets/myntra.png'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import MenuIcon from '@mui/icons-material/Menu';
import classes from './Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { loggedInAction } from '../store/loggedIn';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Navbar = () => {
    const product = useSelector(state => state.product)
    const loggedIn = useSelector(state => state.loggedIn)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logoutHandler = () => {
        localStorage.clear()
        dispatch(loggedInAction.logout())

    }

    return (
        <div className={classes['nav-main']}>
            <div className={classes.navMenu}>
    
            <MenuIcon sx={{ fontSize: "30px",  cursor: "pointer"}} data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" />

<div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="true" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">

    

<div className={`offcanvas-body ${classes.sidebarBody}`}>
<img  width="100%" height="142px" style={{objectFit:"cover"}} src='https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/1/25/08139431-49b4-4895-8f06-3d864e4640fd1674670210709-offer-banner-300-1080x496-code-_-MYNTRA300.jpg' alt=''/>
    <p>MEN  <KeyboardArrowRightIcon sx={{color:"#b9bac1"}}/></p>
    <p>WOMEN <KeyboardArrowRightIcon sx={{color:"#b9bac1"}}/></p>
    <p>KIDS <KeyboardArrowRightIcon sx={{color:"#b9bac1"}}/></p>
    <p>HOME & LIVING <KeyboardArrowRightIcon sx={{color:"#b9bac1"}}/></p>
    <p>BEAUTY <KeyboardArrowRightIcon sx={{color:"#b9bac1"}}/></p>
    <hr style={{padding:"0"}}/>
    <div>Myntra Studio  <span className={classes.naviLevelNewTagRact}>NEW</span></div>
    <div>Myntra Mall <span className={classes.naviLevelNewTagRact}>NEW</span></div>
    <div>Myntra Insider </div>
    <div>Gift Cards </div>
    <div>Contact Us </div>
    <div>FAQs </div>
    <div>Legal </div>
    <img width="100%" src='https://assets.myntassets.com/assets/images/retaillabs/2022/12/30/856cb741-8473-4d5e-b6e3-a52b3d98c99e1672386455977-PWA---App-Download-banner.png' alt=''/> 
</div>



</div>
                <p>Myntra</p>
            </div>
            {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both scrolling & backdrop</button> */}

            
            <img alt='' className={classes['nav-logo']} src={logo} onClick={() => navigate('/')} />
            <div className={classes.navlist}>
                <p className={classes['nav-title']}>MEN</p>
                <p className={classes['nav-title']}>WOMEN</p>
                <p className={classes['nav-title']}>KIDS</p>
                <p className={classes['nav-title']}>HOME & LIVING</p>
                <p className={classes['nav-title']}>BEAUTY</p>
                <p className={classes['nav-title']}>STUDIO</p>
                <input className={classes['nav-input']} placeholder='Search for products, brand and more' />
                <div className={`${classes['nav-profile']} ${classes.searchbar}`}><SearchIcon sx={{ color: "#575b69" }} /></div>
                <div className={`${classes['nav-profile']} ${classes.profile}`}>
                    <PermIdentityIcon sx={{ color: "#575b69" }} />
                    <div className="dropdown">
                        <button className={`${classes.dropdownBtn}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Profile
                        </button>
                        <ul className="dropdown-menu">
                            {!loggedIn.isloggedIn && <li><Link className="dropdown-item" to="/login">Login</Link></li>}
                            {loggedIn.isloggedIn && <li><div className="dropdown-item"><b>Hello {localStorage.getItem("username")?.split(" ")[0]}</b></div></li>}
                            {loggedIn.isloggedIn && <li><div onClick={logoutHandler} className="dropdown-item">Logout</div></li>}
                            {loggedIn.isloggedIn && <li><Link className="dropdown-item" to="/orders">Orders</Link></li>}
                            {/* <li><a className="dropdown-item" href="/">Something else here</a></li> */}
                        </ul>
                    </div>
                </div>
                <div className={classes['nav-profile']} onClick={() => navigate('/wishlist')}>
                    <FavoriteBorderIcon sx={{ color: "#575b69" }} />
                    <span className={classes.btnTagName}>Wishlist</span>
                </div>
                <div className={`${classes['nav-profile']} ${classes.bagItems}`} onClick={() => navigate('/checkout/cart')}>
                    <WorkOutlineIcon sx={{ color: "#575b69" }} />
                    <span className={classes.btnTagName}>Bag</span>
                    {loggedIn.isloggedIn && <span className={classes.bagCount}>{product.totalQuantity}</span>}

                </div>
            </div>

        </div>
    )
}

export default Navbar