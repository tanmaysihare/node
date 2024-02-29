const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const contactRouter = require('./routes/contact-us');
const path = require('path');
const rootDir = require('./util/path');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/admin',adminRouter);
app.use(shopRouter);
app.use(contactRouter);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'));
})

app.listen(3300);