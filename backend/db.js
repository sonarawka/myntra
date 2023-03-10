const mongoose = require('mongoose')
require('dotenv').config();

const password = process.env.MONGOOSE_PASSWORD
const mongooseUrl = `mongodb+srv://sonarawka:${password}@cluster0.23ixr.mongodb.net/myntrav2`

const connectToMongo = ()=>{
    mongoose.connect(mongooseUrl, ()=>{
        console.log("Connected to mongodb successfully!")
    })
} 

module.exports=connectToMongo;