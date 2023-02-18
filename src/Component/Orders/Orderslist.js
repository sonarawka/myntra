import moment from 'moment/moment';
import React from 'react'
import classes from './Orderslist.module.css'
const Orderslist = (props) => {
    const { images, timestamp } = props;
    return (
        <div className={classes.orderslistDiv}>
            <div className={`d-flex ${classes.ordersdeliveredDiv}`}>
                <div className={classes.orderDeliveredImg}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FFF" fillRule="nonzero" d="M19.173 7.059l-7.232-4a.469.469 0 0 0-.454 0l-7.232 4A.503.503 0 0 0 4 7.5v9c0 .185.098.355.255.441l7.232 4a.469.469 0 0 0 .454 0l7.232-4a.503.503 0 0 0 .256-.441v-9a.503.503 0 0 0-.256-.441zm-7.459-2.992L17.922 7.5 15.33 8.933 9.123 5.5l2.591-1.433zm-.482 15.6L4.964 16.2V8.334l6.268 3.466v7.866zm.482-8.734L5.507 7.5l2.591-1.433L14.305 9.5l-2.59 1.433zm6.75 5.267l-6.268 3.466V11.8l6.268-3.466V16.2z"></path></svg>
                    <img src='https://myntraweb.blob.core.windows.net/mymyntra/assets/img/tick.svg' alt='' />
                </div>
                <div>
                    <div style={{ color: "rgb(34,177,148)", fontWeight: "700" }}>
                        Delivered
                    </div>
                    <div>
                        On {moment.unix(timestamp).format('LLLL')}
                    </div>
                </div>
            </div>
            <div className={classes.orderDetailsMain}>
            <div className={`d-flex ${classes.orderDetailsDiv}`}>
                <div>
                    <img width="53px" height="70px" src={images} alt='' />
                </div>
                <div>
                    <div>
                        <b>Roadster</b>
                    </div>
                    <div>
                        The Lifestyle Co Men Charcoal Grey Black Colourblocked Polo Collar Pure Cotton T-shirt
                    </div>
                    <div>
                        Size: L
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Orderslist