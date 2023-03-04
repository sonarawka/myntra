const mongoose = require('mongoose');
const { Schema } = mongoose;

// id, name, subcategory, price, discountPrice, image, rate, count, brand, specifications, description
const ProductSchema = new Schema({
    name: {type: String},
    subcategory: {type: String},
    price: {type: String},
    discountPrice: {type:Number},
    image: {type: Array},
    rate: {type: Number},
    count: {type: Number},
    brand: {type: String},
    specifications: {type: Object},
    description: {type: String}
});

module.exports = mongoose.model('product', ProductSchema);