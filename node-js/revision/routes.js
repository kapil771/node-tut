const fs = require('fs');

const requestHandler = (req,res)=>{
    ////////////
    if(req.url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="subject" /><input type="text" name="message" /><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    /////////////
    if(req.url === '/message' && req.method==='POST'){
        const body = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        })
        var output = '';
        return req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const parsedBodyArr = parsedBody.split('&');
            
            for(message of parsedBodyArr){
                console.log('message:::::::',typeof message);
                output += message+'\n';
            }

            fs.writeFile('message.txt', output, err=>{
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
            });
        });
    }

    /////////
    res.setHeader('Content-Type','text/html');
    res.write('<html><head>');
    res.write('<title>First Node App</title>');
    res.write('</head>');
    res.write('<body>First Node App</body>');
    res.write('</html>');
    res.end();
}

module.exports = requestHandler;
// module.exports = {
//     handler: requestHandler,
//     someText:'Some Text Data'
// }
// module.exports.handler=requestHandler;
// module.exports.someText='Some Text Data';
// exports.handler=requestHandler;
// exports.someText='Some Text Data';