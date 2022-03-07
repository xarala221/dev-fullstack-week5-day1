const http = require('http')

http
  .createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.end('Hello World! \n')
  })
  .listen(8000)

console.log('Le serveur est lacné au http://localhost:8000...')
