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
        <div className={` row ${classes.TopPicksListItem}`} style={{ backgroundImage: `url(${img1})` }}></div>
        <div className={` row ${classes.TopPicksListItem}`} style={{ backgroundImage: `url(${img2})` }}></div>
        <div className={` row ${classes.TopPicksListItem}`} style={{ backgroundImage: `url(${img3})` }}></div>
        <div className={` row ${classes.TopPicksListItem}`} style={{ backgroundImage: `url(${img4})` }}></div>
        <div className={` row ${classes.TopPicksListItem}`} style={{ backgroundImage: `url(${img5})` }}></div>
        <div className={` row ${classes.TopPicksListItem}`} style={{ backgroundImage: `url(${img6})` }}></div>
        <div className={` row ${classes.TopPicksListItem}`} style={{ backgroundImage: `url(${img7})` }}></div>
      </div>
      
    </div>
  )
}

export default TopPicks