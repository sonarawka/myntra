import React from 'react'
import sectionTitle from './Home.module.css'
import classes from './BestOfBrands.module.css'
import img1 from './../../Assets/bestofthebrand/1.jpg'
import img2 from './../../Assets/bestofthebrand/2.jpg'
import img3 from './../../Assets/bestofthebrand/3.jpg'
import img4 from './../../Assets/bestofthebrand/4.jpg'
import img5 from './../../Assets/bestofthebrand/5.jpg'
import img6 from './../../Assets/bestofthebrand/6.jpg'
import img7 from './../../Assets/bestofthebrand/7.jpg'
import img8 from './../../Assets/bestofthebrand/8.jpg'
import img9 from './../../Assets/bestofthebrand/9.jpg'
import img10 from './../../Assets/bestofthebrand/10.jpg'
import img11 from './../../Assets/bestofthebrand/11.jpg'
import img12 from './../../Assets/bestofthebrand/12.jpg'
import img13 from './../../Assets/bestofthebrand/13.jpg'
import img14 from './../../Assets/bestofthebrand/14.jpg'
import img15 from './../../Assets/bestofthebrand/15.jpg'
import img16 from './../../Assets/bestofthebrand/16.jpg'

const BestOfBrands = () => {
  return (
    <div>
        <h4 className={sectionTitle.SectionTitle}>BEST OF MYNTRA EXCLUSIVE BRANDS</h4>
        <div className={classes.BestOfBrandsListq}>
            <div className={` row ${classes.BestOfBrandsListItem}`} style={{backgroundImage:`url(${img1})`}}></div>
            <div className={` row ${classes.BestOfBrandsListItem}`} style={{backgroundImage:`url(${img2})`}}></div>
            <div className={` row ${classes.BestOfBrandsListItem}`} style={{backgroundImage:`url(${img3})`}}></div>
            <div className={` row ${classes.BestOfBrandsListItem}`} style={{backgroundImage:`url(${img4})`}}></div>
            <div className={` row ${classes.BestOfBrandsListItem}`} style={{backgroundImage:`url(${img5})`}}></div>
            <div className={` row ${classes.BestOfBrandsListItem}`} style={{backgroundImage:`url(${img6})`}}></div>
            <div className={` row ${classes.BestOfBrandsListItem}`} style={{backgroundImage:`url(${img7})`}}></div>
            <div className={` row ${classes.BestOfBrandsListItem}`} style={{backgroundImage:`url(${img8})`}}></div>
        </div>
        <div className={classes.BestOfBrandsList}>
            <img src={img9} alt=''/>
            <img src={img10} alt=''/>
            <img src={img11} alt=''/>
            <img src={img12} alt=''/>
            <img src={img13} alt=''/>
            <img src={img14} alt=''/>
            <img src={img15} alt=''/>
            <img src={img16} alt=''/>
        </div>
    </div>
  )
}

export default BestOfBrands