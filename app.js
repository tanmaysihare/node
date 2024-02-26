const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use('/products',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><label>title</label><input type="text" name="title"/><label>size</label><input type="text" name="size"/><button type="submit">Add Product</button></form>')
});
app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/products');
})
app.use('/',(req,res,next)=>{
       res.send('<h1>hello from me</h1>')
});
app.listen(3300);