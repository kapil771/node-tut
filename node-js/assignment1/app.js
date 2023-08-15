const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write('Welcome to Node App!');
        res.write('<form action="/create-user" method="POST">');
        res.write('<input type="text" name="username"> <button type="submit">Submit</button>');
        res.write('</form>');
        return res.end();
    }
    if(req.url==='/create-user' && req.method==='POST'){
        const body = [];
        req.on('data',(chunk)=>{
            body.push(chunk);
        });

        return req.on('end',()=>{
            let parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            res.statusCode=302;
            res.setHeader('Location','/');
            return res.end();
        });
    }
    if(req.url==='/users'){
        res.setHeader('Content-Type','text/html');
        res.write('<ul><li>User1</li><li>User2</li></ul');
        return res.end();
    }
})

server.listen(4000);