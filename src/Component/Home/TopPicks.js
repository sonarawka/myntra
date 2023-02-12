import React from 'react'
import sectionTitle from './Home.module.css'
import classes from './TopPicks.module.css'
import img1 from './../../Assets/toppicks/1.jpg'
import img2 from './../../Assets/toppicks/2.jpg'
import img3 from './../../Assets/toppicks/3.jpg'
import img4 from './../../Assets/toppicks/4.jpg'
import img5 from './../../Assets/toppicks/5.jpg'
import img6 from './../../Assets/toppicks/6.jpg'
import img7 from './../../Assets/toppicks/7.jpg'

const TopPicks = () => {
  return (
    <div>
        <h4 className={sectionTitle.SectionTitle}>TOP PICKS</h4>
        <div className={classes.TopPicksList}>
            <img src={img1} alt=''/>
            <img src={img2} alt=''/>
            <img src={img3} alt=''/>
            <img src={img4} alt=''/>
            <img src={img5} alt=''/>
            <img src={img6} alt=''/>
            <img src={img7} alt=''/>
        </div>
    </div>
  )
}

export default TopPicks