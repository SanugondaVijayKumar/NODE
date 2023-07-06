// const http=require('http');
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     const name="Vijay Kumar";
//     console.log(name);
//     res.end(name);

// });

// server.listen(4000,()=>{
//     console.log("server is running on 4000");
// })


// const server=http.createServer((req,res)=>{
//     const url=new URL(req.url,`http://${req.headers.host}`);
    

//     if(url.pathname=='/home'){
//         res.writeHead(200,{'Content-Type':'text/plain'});
//         res.end('Welcome home');
//     }else if(url.pathname=='/about'){
//         res.writeHead(200,{'Content-Type':'text/plain'});
//         res.end('Welcome to About Us Page');
//     }else if(url.pathname=='/node'){
//         res.writeHead(200,{'Content-Type':'text/plain'});
//         res.end('Welcome to my Node.js Project');
//     }else{
//         res.writeHead(404,{'Content-Type':'text/plain'});
//         res.end('404 Not Found');
//     }
// })




const express=require('express');
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded());

app.use('/add-product',(req,res,next)=>{
    res.send('<html><head><h1>The Product Page</h1></head><body><form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form></body></html>');
})

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    res.send('<h1>Hello from Express!</h1>');
})

app.listen(3000);