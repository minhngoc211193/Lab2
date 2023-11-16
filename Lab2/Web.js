const http = require('http')
const fs = require('fs')
http.createServer((request, respond) =>{
  //  respond.end('<h1>Hello</h1>')
  respond.setHeader('Content-Type', 'application/json')
  if(request.url ==='/'){
    fs.readFile('hello.html', (error, data)=> {
        if(error){
            console.error(error.message)
            respond.end()
        }
      })  
  }else if(request.url === '/hello'){
    fs.readFile('hello.html', (error, data)=> {
        if(error){
            console.error(error.message)
        }else{
            respond.write(data)
            respond.end()
        }
      })
  }
  else if(request.url === '/welcome'){
    fs.readFile('hello.html', (error, data)=> {
        if(error){
            console.error(error.message)
        }else{
            respond.write(data)
            respond.end()
        }
      })
  }else{
        respond.write(`<h1>Error</h1>`)
        respond.end()
}
  
})
Server.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})