import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loggedInAction } from '../../store/loggedIn'
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
  const dispatch = useDispatch()
  
  useEffect(() => {
    if(localStorage.getItem("email")){
       dispatch(loggedInAction.loggedIn())
    }
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [])
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