import React from 'react'
import sectionTitle from './Home.module.css'
import classes from './CategoriesToBag.module.css'
import img1 from './../../Assets/categories/1.jpg'
import img2 from './../../Assets/categories/2.jpg'
import img3 from './../../Assets/categories/3.jpg'
import img4 from './../../Assets/categories/4.jpg'
import img5 from './../../Assets/categories/5.jpg'
import img6 from './../../Assets/categories/6.jpg'
import img7 from './../../Assets/categories/7.jpg'
import img8 from './../../Assets/categories/8.jpg'
import img9 from './../../Assets/categories/9.jpg'
import img10 from './../../Assets/categories/10.jpg'
import img11 from './../../Assets/categories/11.jpg'
import img12 from './../../Assets/categories/12.jpg'
import img13 from './../../Assets/categories/13.jpg'
import img14 from './../../Assets/categories/14.jpg'
import img15 from './../../Assets/categories/15.jpg'
import img16 from './../../Assets/categories/16.jpg'
import img17 from './../../Assets/categories/17.jpg'
import img18 from './../../Assets/categories/18.jpg'
import img19 from './../../Assets/categories/19.jpg'
import img20 from './../../Assets/categories/20.jpg'
import img21 from './../../Assets/categories/21.jpg'
import img22 from './../../Assets/categories/22.jpg'
import img23 from './../../Assets/categories/23.jpg'
import img24 from './../../Assets/categories/24.jpg'


const CategoriesToBag = () => {
  return (
    <div>
        <h4 className={sectionTitle.SectionTitle}>CATEGORIES TO BAG</h4>
        <div className={classes.CategoriesToBagList}>
            <div className={` row ${classes.CategoriesToBagListItem}`} style={{backgroundImage:`url(${img1})`}}></div>
            <div className={` row ${classes.CategoriesToBagListItem}`} style={{backgroundImage:`url(${img2})`}}></div>
            <div className={` row ${classes.CategoriesToBagListItem}`} style={{backgroundImage:`url(${img3})`}}></div>
            <div className={` row ${classes.CategoriesToBagListItem}`} style={{backgroundImage:`url(${img4})`}}></div>
            <div className={` row ${classes.CategoriesToBagListItem}`} style={{backgroundImage:`url(${img5})`}}></div>
            <div className={` row ${classes.CategoriesToBagListItem}`} style={{backgroundImage:`url(${img6})`}}></div>
            <div className={` row ${classes.CategoriesToBagListItem}`} style={{backgroundImage:`url(${img7})`}}></div>
            <div className={` row ${classes.CategoriesToBagListItem}`} style={{backgroundImage:`url(${img8})`}}></div>
        </div>
        <div className={classes.CategoriesToBagList}>
            <div className={` row ${classes.CategoriesToBagListItem}`} style={{backgroundImage:`url(${img9})`}}></div>
            <div className={` row ${classes.CategoriesToBagListItem}`} style={{backgroundImage:`url(${img10})`}}></div>
            <div className={` row ${classes.CategoriesToBagListItem}`} style={{backgroundImage:`url(${img11})`}}></div>
            <div className={` row ${classes.CategoriesToBagListItem}`} style={{backgroundImage:`url(${img12})`}}></div>
            <div className={` row ${classes.CategoriesToBagListItem}`} style={{backgroundImage:`url(${img13})`}}></div>
            <div className={` row ${classes.CategoriesToBagListItem}`} style={{backgroundImage:`url(${img14})`}}></div>
            <div className={` row ${classes.CategoriesToBagListItem}`} style={{backgroundImage:`url(${img15})`}}></div>
            <div className={` row ${classes.CategoriesToBagListItem}`} style={{backgroundImage:`url(${img16})`}}></div>
        </div>
        
        <div className={classes.CategoriesToBagList}>
            <div className={` row ${classes.CategoriesToBagListItem}`} style={{backgroundImage:`url(${img17})`}}></div>
            <div className={` row ${classes.CategoriesToBagListItem}`} style={{backgroundImage:`url(${img18})`}}></div>
            <div className={` row ${classes.CategoriesToBagListItem}`} style={{backgroundImage:`url(${img19})`}}></div>
            <div className={` row ${classes.CategoriesToBagListItem}`} style={{backgroundImage:`url(${img20})`}}></div>
            <div className={` row ${classes.CategoriesToBagListItem}`} style={{backgroundImage:`url(${img21})`}}></div>
            <div className={` row ${classes.CategoriesToBagListItem}`} style={{backgroundImage:`url(${img22})`}}></div>
            <div className={` row ${classes.CategoriesToBagListItem}`} style={{backgroundImage:`url(${img23})`}}></div>
            <div className={` row ${classes.CategoriesToBagListItem}`} style={{backgroundImage:`url(${img24})`}}></div>
        </div>
    </div>
  )
}

export default CategoriesToBag