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
 
router.get('/getProducts/:page', async(req, res)=>{
    let page=1;
    if(req.params.page){
        page=parseInt(req.params.page)
    }
    

    const skip =(page-1)*30

    try {
        const count = await Products.find({}).countDocuments({})
        const products=await Products.find({}).skip(skip).limit(30)

    res.json({products,total_results:count, total_pages:Math.ceil(count/30)})}
    catch (error){
        res.status(500).send("Some error is there!")
    }
})

module.exports=router;