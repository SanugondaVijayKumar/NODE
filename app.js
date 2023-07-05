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
const fs=require('fs');

const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        //trying to change code from here
        const display_message=fs.readFileSync('message.txt').toString();
        
        
        res.write('<html>');
        res.write('<head><title>Enter the Message</title></head>');
        res.write(`<body><div>${display_message}</div><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`);
        res.write('</html>');
        return res.end();
    }

    if(url==='/message' && method==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);

        });
        return req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split('=')[1];
            fs.writeFile('message.txt',message,(err)=>{
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
            });

        });
        
        
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
    res.write('</html>');
    res.end();
    
});

server.listen(3000);
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

