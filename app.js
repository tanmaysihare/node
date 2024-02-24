const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url, req.method, req.header );
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>HOME PAGE</title></Head>');
    res.write('<body>');
    if(req.url === '/home'){
        res.write('<h1>welcome home</h1>');
    }else if(req.url === '/about'){
        res.write('<h1>welcome to about page</h1>');
    }else if(req.url === '/node'){
        res.write('<h1>welcome to node.js</h1>');
    }else{
    res.write('<h1>hello  i am Tanmay Sihare</h1>');
    }
    res.write('</body>');
    res.write('</html>');
    res.end();
});
server.listen(4000);