const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url==='/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message" /><input type="submit" value="Submit" /></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(req.url==='/message' && req.method==='POST'){
        const body = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            // console.log(parsedBody);
            fs.writeFileSync('message.txt',message);
        })
        // fs.writeFileSync('message.txt','DUMMY');
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First node js Page</title></head>');
    res.write('<body><h1>Hello, My First node js Page</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000,()=>{
    console.log('Listening 3000...........');
});