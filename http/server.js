const http = require('http');

const requestFunction = (req,res) => {
  if(req.url === "/") {
    res.status = 200;
    res.end("Hello")
  }
  if(req.url === "/about") {
    res.status = 200;
    res.end("Hello about")
  }
  res.end("no page")
}

const server = http.createServer(requestFunction);

server.listen(3000)