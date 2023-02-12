import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'
import BestOfBrands from './BestOfBrands'
import Carousel from './Carousel'
import CategoriesToBag from './CategoriesToBag'
import DealOfTheDay from './DealOfTheDay'
import Footer from './Footer'
import classes from './Home.module.css'
import TopPicks from './TopPicks'
const Home = () => {
  const navigate = useNavigate()
  
  return (
    <div>
        <Navbar/>
        <div className={classes.homeMain}>
            <Carousel/>
            <div onClick={()=>navigate('/productItems')}>
            <DealOfTheDay/>
            <BestOfBrands/>
            <TopPicks/>
            <CategoriesToBag/>
            </div>

            <Footer/>
        </div>
    </div>
  )
}

export default Home