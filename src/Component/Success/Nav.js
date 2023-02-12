import React from 'react'
import classes from './Success.module.css'
import logo from '../../Assets/myntra.png'
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate()

  return (
    <div className={classes['nav-main']}>
    <div onClick={()=>navigate('/')} className={classes.logoDiv}>
      <img alt='' className={classes['nav-logo']} src={logo}/> <b>Myntra</b>
    </div>
        
    <div className={classes.pageDesc}>
      THIS IS A SECURE TRANSACTION
    </div>
         
  </div>
  )
}

export default Nav