const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  const file = (req.url === '/') ? 'index.html' : `${req.url.slice(1)}.html`
  fs.readFile(file, (err, data) => {
    if(err){
      return fs.readFile('404.html', (err, data) => {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end(data)
      })
    }
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(data)
  })
}).listen(5000)