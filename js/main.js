let http = require('http')
let fs = require('fs')


let server = http.createServer(function(req, res){
    if(req.url === '/'){
        fs.readFile('./html/index.html', function(err, data){
            res.write(data)
            res.end()
        })
    }
    if(req.url === '/about'){
        fs.readFile('./html/about.html', function(err, data){
            res.writeHead(200, {'content-type':'txt/html'})
            res.write(data)
            res.end()
        })
    }
    else if(req.url === '/contact us'){
        fs.readFile()
    }
})


server.listen(2020)
console.log('server is on...')