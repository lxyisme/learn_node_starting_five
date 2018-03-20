const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')
;(async () => {
  const test = await fs.readFileSync('./test.html')
  console.log(test)
  http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    console.log(request.url)
    // 发送响应数据 "Hello World"
    response.end(test);
  }).listen(3400)

})()



