import { Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Product from './Product'
import classes from './ProductItems.module.css'
const host = process.env.REACT_APP_HOST


const ProductItems = () => {
    const [productItems, setproductItems] = useState()
    const [pageNo, setPageNo] = useState(1)
    const HandleChange=(event, page)=>{
        setPageNo(page)
    }
    const getProduct = async()=>{
        const response = await fetch(`${host}/api/products/getProducts/${pageNo}`);
        const data= await response.json();
        
        setproductItems(data.products)
      
      }
    console.log(productItems)
    useEffect(()=>{
        getProduct()
    },[pageNo])
 
  return (
    <div>
        <Navbar/>
        <div className={classes.productItemsMain}>
        <div className={classes.header}>
            <p>Home / <span className={classes.headerTitle}>Women Accessories</span></p>
            <p><b>Women Accessories</b> - 274955 items</p>
        </div>
        <div className='row'>
            <div className='col-md-2 '>
                <p><b>FILTERS</b></p>
                
                <p><b>CATEGORIES</b></p>
                <div>
                    <input type="checkbox" id="filter1" name="filter1" value="Bike"/>
                    <label htmlFor="filter1"> Earrings(42283)</label><br/>
                    <input type="checkbox" id="filter2" name="filter2" value="Bike"/>
                    <label htmlFor="filter2"> Handbags(20778)</label><br/>
                    <input type="checkbox" id="filter3" name="filter3" value="Bike"/>
                    <label htmlFor="filter3"> Jewellery Set(18585)</label><br/>
                    <input type="checkbox" id="filter4" name="filter4" value="Bike"/>
                    <label htmlFor="filter4"> Mobile Accessories(11898)</label><br/>
                    <input type="checkbox" id="filter5" name="filter5" value="Bike"/>
                    <label htmlFor="filter5"> Necklace and Chains(11682)</label><br/>
                </div>

                <p className={classes.filterHeadings}><b>BRAND</b></p>
                <div>
                    <input type="checkbox" id="brand1" name="brand1" value="Bike"/>
                    <label htmlFor="brand1"> macmerise(7652)</label><br/>
                    <input type="checkbox" id="brand2" name="brand2" value="Bike"/>
                    <label htmlFor="brand2"> SOHI(4442)</label><br/>
                    <input type="checkbox" id="brand3" name="brand3" value="Bike"/>
                    <label htmlFor="brand3"> Zaveri Pearls(3382)</label><br/>
                    <input type="checkbox" id="brand4" name="brand4" value="Bike"/>
                    <label htmlFor="brand4">Yellow Chimes(2942)</label><br/>
                    <input type="checkbox" id="brand5" name="brand5" value="Bike"/>
                    <label htmlFor="brand5"> Silvermerc Designs(2459)</label><br/>
                </div>

                <p className={classes.filterHeadings}><b>PRICE</b></p>
                <div>
                    <input type="checkbox" id="price1" name="price1" value="Bike"/>
                    <label htmlFor="price1"> Rs. 35 to Rs. 13026(272898)</label><br/>
                    <input type="checkbox" id="price2" name="price2" value="Bike"/>
                    <label htmlFor="price2"> Rs. 13026 to Rs. 26017(1817)</label><br/>
                    <input type="checkbox" id="price3" name="price3" value="Bike"/>
                    <label htmlFor="price3"> Rs. 26017 to Rs. 39008(213)</label><br/>
                    <input type="checkbox" id="price4" name="price4" value="Bike"/>
                    <label htmlFor="price4">Rs. 39008 to Rs. 51999(37)</label><br/>
                </div>

                <p className={classes.filterHeadings}><b>DISCOUNT RANGE</b></p>
                <div>
                    <input type="radio" id="discount1" name="discount1" value="discount1"/>
                    <label htmlFor="discount1">10% and above</label><br/>
                    <input type="radio" id="discount2" name="discount2" value="discount2"/>
                    <label htmlFor="discount2">20% and above</label><br/>
                    <input type="radio" id="discount3" name="discount3" value="discount3"/>
                    <label htmlFor="discount3">30% and above</label><br/>
                    <input type="radio" id="discount4" name="discount4" value="discount4"/>
                    <label htmlFor="discount4">0% and above</label><br/>
                </div>


            </div>
            <div className='col-md-10 mw-100'>
                <div className='d-flex justify-content-between '>
                    <div className={classes.subHeader}>
                        <p>Bundles</p>
                        <p>Country of Origin</p>
                        <p>Size</p>
                    </div>
                    <div>
                        <p>Sort By : <b>Recommended</b></p>
                    </div>
                </div>
                <div className='row'>
                {productItems && productItems.map((e)=>{
                    return(
                        <Product 
                            id={e.id}
                            key={e.id}
                            title={e.name}
                            img={e.image} 
                            price={e.price}
                            discountPrice={e.discountPrice}
                            rate={e.rate} 
                            count={e.count}
                            brand={e.brand}
                            specifications={e.specifications}
                            desc={e.description}
                            />
                    )
                })}
                </div>
                <div className={classes.paginationBtn}>
                    <Pagination onChange={HandleChange} count={10} variant="outlined" shape="rounded" />
                </div>
            </div>
            
            </div>
        </div>
    </div>
  )
}

export default ProductItems