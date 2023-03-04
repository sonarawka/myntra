const express = require('express');
const db = require('./db')
const cors = require('cors');
const app = express();
db();
require('dotenv').config();
const PORT = process.env.PORT || 4242;

app.use(cors())
app.use(express.json({verify: (req,res,buf) => { req.rawBody = buf }}));

app.use('/api', require('./routes/webhook'))
app.use('/api/products', require('./routes/product'))
app.use('/create-checkout-session', require('./routes/checkoutsession'))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});