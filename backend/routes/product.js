const express = require('express');
const router = express.Router()
const Products = require('../models/Products')

router.post('/addProducts', async(req, res)=>{
    const results = req.body.results
    try {results.forEach(async(e) => {
        const{name, subcategory, price, discountPrice, image, rate, count, brand, specifications, description} = e
        const products = new Products({
            name, subcategory, price, discountPrice, image, rate, count, brand, specifications, description
        })
        await products.save()

    });
    res.json({success:"done"})}
    catch (error){
        res.status(500).send("Some error is there!")
    }

})

router.get('/getProducts', async(req, res)=>{
    try {const products=await Products.find({})

    res.json({products})}
    catch (error){
        res.status(500).send("Some error is there!")
    }
})

module.exports=router;