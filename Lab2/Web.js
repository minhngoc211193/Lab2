const http = require('http')
http.createServer((request, respond) =>{
  //  respond.end('<h1>Hello</h1>')
  respond.setHeader('Content-Type', 'application/json')
  respond.write('<h1>Hello hi</h1>' )
  respond.end()
}).listen(5000)