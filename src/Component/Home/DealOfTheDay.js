import React from 'react'
import classes from './DealOfTheDay.module.css'
import sectionTitle from './Home.module.css'
import img1 from './../../Assets/dealoftheday/1.jpg'
import img2 from './../../Assets/dealoftheday/2.jpg'
import img3 from './../../Assets/dealoftheday/3.jpg'
import img4 from './../../Assets/dealoftheday/4.jpg'
import img5 from './../../Assets/dealoftheday/5.jpg'
import img6 from './../../Assets/dealoftheday/6.jpg'
import img7 from './../../Assets/dealoftheday/7.jpg'
import img8 from './../../Assets/dealoftheday/8.jpg'

const DealOfTheDay = () => {
  return (
    <div className={classes.DealOfTheDayMain}>
        <h4 className={sectionTitle.SectionTitle}>DEAL OF THE DAY</h4>
        <div className={classes.DealOfTheDayList}>
            <div className={` row ${classes.DealOfTheDayListItem}`} style={{backgroundImage:`url(${img1})`}}></div>
            <div className={` row ${classes.DealOfTheDayListItem}`} style={{backgroundImage:`url(${img2})`}}></div>
            <div className={` row ${classes.DealOfTheDayListItem}`} style={{backgroundImage:`url(${img3})`}}></div>
            <div className={` row ${classes.DealOfTheDayListItem}`} style={{backgroundImage:`url(${img4})`}}></div>
            <div className={` row ${classes.DealOfTheDayListItem}`} style={{backgroundImage:`url(${img5})`}}></div>
            <div className={` row ${classes.DealOfTheDayListItem}`} style={{backgroundImage:`url(${img6})`}}></div>
            <div className={` row ${classes.DealOfTheDayListItem}`} style={{backgroundImage:`url(${img7})`}}></div>
            <div className={` row ${classes.DealOfTheDayListItem}`} style={{backgroundImage:`url(${img8})`}}></div>
            
           
        </div>
    </div>
  )
}

export default DealOfTheDay