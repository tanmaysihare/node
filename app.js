const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    
 
      if (url === '/') {
        fs.readFile('message.txt','utf8',data=>{
        res.write('<html>');
        res.write('<head><title>enter message PAGE</title></head>');
        res.write('<body>');
        res.write(`<h1>${data}</h1>`);
        console.log(data);
        res.write('<form action="/massage" method="POST"><input type="text" name="message"/><button type="submit">send</button></form>');    
        res.write('</body>');
        res.write('</html>');
        return res.end();
    })
    } else if (url === '/massage' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',()=> {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt',message, err => {
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
        });
       } 
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<html>');
    // res.write('<head><title>HOME PAGE</title></head>');
    // res.write('<body>');
    // res.write('<h1>hello  i am Tanmay Sihare</h1>');
    // res.write('</body>');
    // res.write('</html>');
    // res.end();
});

server.listen(4000);
