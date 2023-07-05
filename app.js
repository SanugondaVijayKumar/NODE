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

const app=express();

app.use((req,res,next)=>{
    console.log("In the middleware!");
    next();
})

app.use((req,res,next)=>{
    console.log("In another middleware!");
    res.send('<h1>Hello from Express!</h1>');
})

app.listen(3000);