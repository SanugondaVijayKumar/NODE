const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    const name="Vijay Kumar";
    console.log(name);
    res.end(name);

});

server.listen(4000,()=>{
    console.log("server is running on 4000");
})