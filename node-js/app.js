const http = require('http');
const DebitPayment = require('./DebitPayment');
const PaypalPayment = require('./PaypalPayment');
const CreditPayment = require('./CreditPayment');
const logger = require("./Logger");

// const logger = new Logger().getInstance();
// const logger = new Logger();
const server = http.createServer((req, res) => {
    logger.log('starting app...');
    
    const debitPayment = new DebitPayment();
    debitPayment.processPayment(50);

    const paypalPayment = new PaypalPayment();
    paypalPayment.processPayment(16);

    const creditPayment = new CreditPayment();
    creditPayment.processPayment(90);
    // console.log(req.url, req.headers, req.method);
    // // process.exit();
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<html>');
    // res.write('<head><title>My First node js Page</title></head>');
    // res.write('<body><h1>Hello, My First node js Page</h1></body>');
    // res.write('</html>');
    // res.end();

    logger.log('=========================================');
    logger.log('finished app...');

    console.log(`${logger.count} logs total`);
    logger.logs.map(log => console.log(`${log.message}`));
});

server.listen(3000);

////////////////
// http.createServer(function (req, res) {

// });

/////////////////
// function rqListener(req, res) {

// }
// http.createServer(rqListener);

