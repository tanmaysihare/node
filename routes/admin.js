const express = require('express');

const router = express.Router();

router.get('/products',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><label>title</label><input type="text" name="title"/><label>size</label><input type="text" name="size"/><button type="submit">Add Product</button></form>')
});
router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/products');
})
module.exports= router;