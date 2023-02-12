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
            <img src={img1} alt=''/>
            <img src={img2} alt=''/>
            <img src={img3} alt=''/>
            <img src={img4} alt=''/>
            <img src={img5} alt=''/>
            <img src={img6} alt=''/>
            <img src={img7} alt=''/>
            <img src={img8} alt=''/>
        </div>
    </div>
  )
}

export default DealOfTheDay