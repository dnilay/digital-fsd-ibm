const http=require('http');
const hostName='localhost';
const port=3000;
http.createServer(function (req,res) {
    //res.setHeader('content-type','text/html');
    res.write('<h1>Hello World of Node..</h1>');
    res.end();

}).listen(port,hostName,function (){
    console.log(`server listening at http://${hostName}:${port}/ `);
})