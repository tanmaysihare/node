const express = require('express');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRouter);
app.use(shopRouter);
app.use((req,res,next)=>{
    res.status(404).send('<h1>page not found</h1>');
})

app.listen(3300);