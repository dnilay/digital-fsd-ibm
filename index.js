const http=require('http');
const server=http.createServer(((req, res) => {
    res.setHeader('content-type','text/html');
    res.write('<html>' +
        '<head>' +
        '<title>' +
        'index page' +
        '</title>' +
        '</head>' +
        '<body>' +
        '<h1>Welcome to the awesome world of Node</h1>\<' +
        '/body>' +
        '</html>');
    res.end();
}));
server.listen(3000,function ()
{
    console.log('server started on port number 3000');
});