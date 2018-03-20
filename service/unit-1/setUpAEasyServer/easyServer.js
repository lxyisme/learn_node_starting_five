const fs = require('fs')
const http = require('http')
const path = require('path')
const url = require('url')
const mime = require('mime-types')
;(() => {
  http.createServer((request, response) => {
    const requestUrl = request.url
    let pathName = url.parse(requestUrl).pathname;
    const extname = path.extname(pathName)
    if (!extname) {
      let redirect = `http://${request.headers.host}${pathName}`
      if (!/\/$/.test(pathName)) {
        redirect += '/'
        response.writeHead(301, { location: redirect })
        response.end()
        return false
      }
      pathName += 'index.html'
    }
    let contentType = extname ? mime.lookup(extname) : 'text/html'
    const filePath = path.join(path.join(__dirname, '../../../public'), pathName)
    fs.readFile(filePath ,(err, data) => {
      if (err) {
        response.writeHead(404, { "content-type": "text/html" });
        response.end("<h1>404 Not Found</h1>");
      } else {
        response.writeHead(200, { "content-type": contentType });
        response.end(data,'utf8');
      }
    })
  }).listen(3400)
})()
