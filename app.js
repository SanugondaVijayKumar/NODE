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

const http=require('http');
// const server=http.createServer((req,res)=>{
//     console.log(req.url,req.method,req.headers);
//     //process.exit();
//     res.setHeader('Content-Type','text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page</title></head>');
//     res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
//     res.write('</html>');
//     res.end();
// });

const server=http.createServer((req,res)=>{
    const url=new URL(req.url,`http://${req.headers.host}`);
    

    if(url.pathname=='/home'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('Welcome home');
    }else if(url.pathname=='/about'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('Welcome to About Us Page');
    }else if(url.pathname=='/node'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('Welcome to my Node.js Project');
    }else{
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end('404 Not Found');
    }
})

server.listen(3000);