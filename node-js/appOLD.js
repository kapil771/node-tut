// const http = require('http');
// const DebitPayment = require('./DebitPayment');
// const PaypalPayment = require('./PaypalPayment');
// const CreditPayment = require('./CreditPayment');
// const logger = require("./Logger");

// // const logger = new Logger().getInstance();
// // const logger = new Logger();
// const server = http.createServer((req, res) => {
//     logger.log('starting app...');
    
//     const debitPayment = new DebitPayment();
//     debitPayment.processPayment(50);

//     const paypalPayment = new PaypalPayment();
//     paypalPayment.processPayment(16);

//     const creditPayment = new CreditPayment();
//     creditPayment.processPayment(90);
//     // console.log(req.url, req.headers, req.method);
//     // // process.exit();
//     // res.setHeader('Content-Type', 'text/html');
//     // res.write('<html>');
//     // res.write('<head><title>My First node js Page</title></head>');
//     // res.write('<body><h1>Hello, My First node js Page</h1></body>');
//     // res.write('</html>');
//     // res.end();

//     logger.log('=========================================');
//     logger.log('finished app...');

//     console.log(`${logger.count} logs total`);
//     logger.logs.map(log => console.log(`${log.message}`));
// });

// server.listen(3000);

// ////////////////
// // http.createServer(function (req, res) {

// // });

// /////////////////
// // function rqListener(req, res) {

// // }
// // http.createServer(rqListener);

const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    // console.log(req.url, req.method, req.headers);
    if(req.url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="subject" /><input type="text" name="message" /><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

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
            // fs.writeFileSync('message.txt',output);
            // res.statusCode=302;
            // res.setHeader('Location','/');
            // return res.end();
        });
        
        // console.log('output:::::::::',output);
        // fs.writeFileSync('message.txt',output);
        // res.statusCode=302;
        // res.setHeader('Location','/');
        // return res.end();
    }

    res.setHeader('Content-Type','text/html');
    res.write('<html><head>');
    res.write('<title>First Node App</title>');
    res.write('</head>');
    res.write('<body>First Node App</body>');
    res.write('</html>');
    res.end();
    // process.exit();
});

server.listen(3000);
///////////////////////////
// http.createServer(function(req,res){

// });

///////////////////////////////
// function rqListener(req,res){

// }

// http.createServer(rqListener);