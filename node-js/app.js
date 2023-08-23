const http = require('http');
const express = require('express')

const app = express();

// this function will access all incoming request
app.use('/add',(req,res,next)=>{
    console.log('In the middleware');
    res.send('<h1>The Add Product Page</h1>');
    // next(); // Allows the request to continue to the next middleware in line
});

app.use((req,res,next)=>{
    console.log('In another middleware');
    res.send('<h1>Hello from express jsssss</h1>');
});

// const server = http.createServer(app);

// server.listen(3000);
app.listen(3000);