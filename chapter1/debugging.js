let http = require('http');

function process_request(req,res){
    const body = 'Thanks for 的!\n';
    let content_length = body.lenggth;
    res.writeHead(200,{
        'Content-Length':content_length,
        'Content-Type':'text/plain'
    });
    res.end(body);
}

let s = http.createServer(process_request);
s.listen(8080);