// // import { buffer } from 'micro';
// // import * as admin from 'firebase-admin'


// // export default async (req, res)=>{
// //     if(req==='POST'){

// //     }
// // }

const express = require('express');
const router = express.Router();

router.post('/webhook', async (req, res) => {
    console.log("webhook")
})

module.exports=router;