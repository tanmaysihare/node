const express = require('express');
const app = express();
app.use((req,res,next)=>{
    console.log('hello');
    next();
});
app.use((req,res,next)=>{
    console.log('hello2');
    res.send('<h1>hello from me</h1>')
});
app.listen(3300);