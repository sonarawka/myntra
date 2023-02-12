import React from 'react'
import Nav from '../Success/Nav'
import classes from './Cancel.module.css'
import logo from '../../Assets/myntra.png'
import { useNavigate } from 'react-router-dom';
import CancelStamp from '../Stamp/CancelStamp';

const Cancel = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Nav />
            <div className={classes.main}>

                <div className={`${classes.successCard}`}>
                    <div className={classes.navLogoDiv}><img alt='' className={classes['nav-logo']} src={logo} /></div>

                    <div className={classes.banner}>
                        <h3>Order cancelled</h3>
                        <div className={classes.stamp}><CancelStamp /></div>
                    </div>

                    <h4 className={classes.desc}>Sorry For The Inconvenience</h4>

                </div>
                <button onClick={() => navigate('/')} className={classes.orderBtn}>CONTINUE SHOPPING</button>

            </div>
        </div>
    )
}

export default Cancel