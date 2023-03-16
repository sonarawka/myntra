import React from 'react'
import logo from '../Assets/myntra.png'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import MenuIcon from '@mui/icons-material/Menu';
import classes from './Navbar.module.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { loggedInAction } from '../store/loggedIn';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const product = useSelector(state => state.product)
  const loggedIn = useSelector(state => state.loggedIn)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logoutHandler = () => {
    localStorage.clear()
    dispatch(loggedInAction.logout())

  }
  const location = useLocation();
  return (
    <div className={classes['nav-main']}>
      <div className={classes.navMenu}>

        {location.pathname === "/" && <MenuIcon sx={{ fontSize: "30px", cursor: "pointer" }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" />}

        {location.pathname !== "/" && <ArrowBackIcon onClick={() => navigate(-1)} sx={{ fontSize: "30px", cursor: "pointer" }} />}

        <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="true" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">



          <div className={`offcanvas-body ${classes.sidebarBody}`}>
            {loggedIn.isloggedIn && <div className={classes.loggedInModelImage}>
              <div className={classes.profileMain}>
                <div className={classes.profileIcon}>
                  <svg width="36" height="36" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z" opacity="0.05"></path><path fill="#282C3F" d="M5.808 18.004l8.895-.039c-.304-1.27-1.778-1.775-3.036-1.97a.5.5 0 01-.423-.49l-.012-1.071a3.94 3.94 0 01-.977.126 3.97 3.97 0 01-.981-.127l.007 1.063a.5.5 0 01-.426.499c-.843.125-2.695.563-3.047 2.01zm1.448-7.444c0 1.654 1.345 3 2.999 3a3.003 3.003 0 002.998-3v-1.5c0-1.654-1.345-3-2.998-3a3.003 3.003 0 00-2.999 3v1.5zm4.983 4.52c2.275.462 3.52 1.653 3.52 3.383a.497.497 0 01-.497.496L5.252 19H5.25a.497.497 0 01-.5-.494c0-1.716 1.31-2.975 3.529-3.425l-.008-1.052a4 4 0 01-2.014-3.468v-1.5c0-2.206 1.793-4 3.998-4a4.003 4.003 0 013.998 4v1.5a4 4 0 01-2.026 3.475l.012 1.046zM16.252 6a.5.5 0 010-1h2.498a.5.5 0 010 1h-2.498zm2.498 3a.5.5 0 010 1h-2.498a.5.5 0 010-1h2.498zm0 4a.5.5 0 010 1h-2.498a.5.5 0 010-1h2.498z"></path></g></svg></div>
                  <div data-bs-dismiss="offcanvas" aria-label="Close"><CloseIcon sx={{color:"white", fontSize:"28px", fontWeight:"200"}}/></div>
                
              </div>
              <div className={classes.userDetail}>
                <p>{localStorage.getItem("username")?.split(" ")[0]}</p>
                <div onClick={logoutHandler} className={classes.logout}>LOGOUT</div>
              </div>
            </div>}
            {!loggedIn.isloggedIn && <div className={classes.modelImage}>
              <img width="100%" height="142px" style={{ objectFit: "cover" }} src='https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/1/25/08139431-49b4-4895-8f06-3d864e4640fd1674670210709-offer-banner-300-1080x496-code-_-MYNTRA300.jpg' alt='' />
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              <div onClick={() => navigate('/login')} className={classes.sidebarLoginBtn}>SIGN UP. LOGIN</div>
            </div>}
            <div className={classes.topMenuContainer}>
              <p>MEN  <KeyboardArrowRightIcon sx={{ color: "#b9bac1" }} /></p>
              <p>WOMEN <KeyboardArrowRightIcon sx={{ color: "#b9bac1" }} /></p>
              <p>KIDS <KeyboardArrowRightIcon sx={{ color: "#b9bac1" }} /></p>
              <p>HOME & LIVING <KeyboardArrowRightIcon sx={{ color: "#b9bac1" }} /></p>
              <p>BEAUTY <KeyboardArrowRightIcon sx={{ color: "#b9bac1" }} /></p>
            </div>
            <hr />
            <div className={classes.bottomMenuContainer}>
              {loggedIn.isloggedIn && <div>Account </div>}
              {loggedIn.isloggedIn && <div onClick={()=>navigate('/orders')}>Orders </div>}
              <div>Myntra Studio  <span className={classes.naviLevelNewTagRact}>NEW</span></div>
              <div>Myntra Mall <span className={classes.naviLevelNewTagRact}>NEW</span></div>
              <div>Myntra Insider </div>
              <div>Gift Cards </div>
              <div>Contact Us </div>
              <div>FAQs </div>
              <div>Legal </div>
            </div>
            <img width="100%" src='https://assets.myntassets.com/assets/images/retaillabs/2022/12/30/856cb741-8473-4d5e-b6e3-a52b3d98c99e1672386455977-PWA---App-Download-banner.png' alt='' />
          </div>



        </div>
        <p>Myntra</p>
      </div>
     


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