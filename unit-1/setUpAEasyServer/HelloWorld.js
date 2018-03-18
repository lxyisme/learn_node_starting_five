const http = require('http')
http.createServer((request, response) => {
  // response.writeHead(200, { 'Content-Type': 'text/plain' });

  // 发送响应数据 "Hello World"
  response.end('Hello World\n');
}).listen(3400)
